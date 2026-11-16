import { expect, test } from "@playwright/test";

test("directory search combines with field filters and recovers from empty results", async ({ page }) => {
  await page.goto("/");
  const search = page.getByRole("searchbox", { name: "Search profiles" });
  await page.keyboard.press("/");
  await expect(search).toBeFocused();
  await search.fill("paul graham");
  const cards = page.locator("#directory .person-card");
  await expect(cards).toHaveCount(1);
  await expect(cards.first()).toContainText("Paul Graham");
  await page.getByRole("button", { name: /^Capital / }).click();
  await expect(cards).toHaveCount(1);
  await page.getByRole("button", { name: /^Philosophy / }).click();
  await expect(cards).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "No profiles found" })).toBeVisible();
  await search.clear();
  await expect(cards).not.toHaveCount(0);
  await expect(page.getByRole("link", { name: /Heraclitus/ })).toBeVisible();
  await page.getByRole("button", { name: /^All profiles / }).click();
  await page.getByRole("combobox", { name: "Sort", exact: true }).selectOption("name");
  await expect(cards.first()).toContainText("Sam Altman");
});

test("Index navigation exposes the archive without Library links", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "The Influence Index" })).toBeVisible();
  await expect(page).toHaveTitle("The Influence Index");
  await expect(page.getByRole("link", { name: "The Influence Index home" })).toHaveText("INFLUENCE/INDEX");
  const navigation = page.getByRole("navigation", { name: "Archive views" });
  await expect(navigation.getByRole("link", { name: "People", exact: true })).toHaveAttribute("href", "/");
  await expect(navigation.getByRole("link", { name: "Themes", exact: true })).toHaveAttribute("href", "/themes");
  await expect(navigation.getByRole("link", { name: "Timeline", exact: true })).toHaveAttribute("href", "/timeline");
  await expect(navigation.getByRole("link", { name: "Compare", exact: true })).toHaveAttribute("href", "/compare");
  await expect(page.locator('a[href="/library"], a[href^="/persona/"], a[href^="/category/"], a[href^="/template/"]')).toHaveCount(0);
  await page.getByRole("link", { name: "About the archive" }).click();
  await expect(page.getByRole("heading", { name: "About the archive", exact: true })).toBeVisible();
});

test("profiles retain sources and comparison without one-pager links", async ({ page }) => {
  await page.goto("/people/paul-graham");
  await expect(page.getByRole("heading", { name: "Paul Graham", exact: true, level: 1 })).toBeVisible();
  await expect(page).toHaveTitle("Paul Graham · Influence Index");
  await page.getByText(/^Sources \d+$/).click();
  await expect(page.locator(".profile-sources .sources a").first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Compare with someone" })).toHaveAttribute("href", "/compare?left=paul-graham");
  await expect(page.locator('a[href="/library"], a[href^="/persona/"]')).toHaveCount(0);
});

test("comparison selectors preserve both profiles in the URL and after reload", async ({ page }) => {
  await page.goto("/compare");
  const left = page.getByRole("combobox", { name: "Profile A", exact: true });
  const right = page.getByRole("combobox", { name: "Profile B", exact: true });
  await left.selectOption("paul-graham");
  await expect(page).toHaveURL(/left=paul-graham/);
  await right.selectOption("steve-jobs");
  await expect(page).toHaveURL(/left=paul-graham&right=steve-jobs/);
  await expect(page.getByRole("heading", { name: "Paul Graham", level: 2 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Steve Jobs", level: 2 })).toBeVisible();
  await page.reload();
  await expect(left).toHaveValue("paul-graham");
  await expect(right).toHaveValue("steve-jobs");
  await expect(page.getByRole("heading", { name: "Paul Graham", level: 2 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Steve Jobs", level: 2 })).toBeVisible();
});

test("invalid and repeated comparison parameters use safe default profiles", async ({ page }) => {
  for (const [query, left, right] of [
    ["left=missing&right=missing", "sol-price", "sam-walton"],
    ["left=steve-jobs&left=paul-graham&right=missing", "sol-price", "sam-walton"],
    ["left=missing&right=steve-jobs&right=paul-graham", "sol-price", "sam-walton"],
    ["left=sam-walton&right=missing", "sam-walton", "sol-price"],
  ]) {
    await page.goto(`/compare?${query}`);
    await expect(page.getByRole("combobox", { name: "Profile A", exact: true })).toHaveValue(left);
    await expect(page.getByRole("combobox", { name: "Profile B", exact: true })).toHaveValue(right);
    await expect(page.getByRole("heading", { name: "Sol Price", level: 2 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Sam Walton", level: 2 })).toBeVisible();
  }
});

test("timeline filters and field notes connect to profiles and comparisons", async ({ page }) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Archive views" });
  await navigation.getByRole("link", { name: "Timeline", exact: true }).click();
  await expect(page.getByRole("heading", { name: "A timeline of influence" })).toBeVisible();
  await page.getByRole("button", { name: /^Philosophy / }).click();
  const timeline = page.locator(".timeline-list");
  await expect(timeline.getByRole("link", { name: "Heraclitus", exact: true })).toBeVisible();
  await expect(timeline).toContainText("c. 500 BCE");
  await expect(timeline.getByRole("link", { name: "Bill Gates", exact: true })).toHaveCount(0);
  await navigation.getByRole("link", { name: "Themes", exact: true }).click();
  await page.getByRole("link", { name: /Designing for participants/ }).click();
  await expect(page.getByRole("heading", { name: "Designing for participants", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Compare two profiles" }).click();
  await expect(page).toHaveURL(/\/compare\?left=dee-hock&right=bill-gates/);
  await expect(page.getByRole("heading", { name: "Dee Hock", level: 2 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Bill Gates", level: 2 })).toBeVisible();
});

test("archive pages fit a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  for (const route of ["/", "/people/paul-graham", "/compare", "/timeline", "/themes", "/themes/designing-for-participants"]) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const size = await page.evaluate(() => ({
      content: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }));
    expect(size.content, `horizontal overflow at ${route}`).toBeLessThanOrEqual(size.viewport);
  }
});

test("removed Library routes and assets return 404 while Index controls return 200", async ({ request }) => {
  for (const route of ["/", "/content/influence/paul-graham.webp"]) {
    expect((await request.get(route)).status(), `positive control ${route}`).toBe(200);
  }
  for (const route of [
    "/library",
    "/persona/paul-graham",
    "/category/startups",
    "/template/PersonalPlanner",
    "/content/personas/paul-graham/avatar.png",
    "/content/templates/PersonalPlanner.pdf",
  ]) {
    expect((await request.get(route)).status(), `removed resource ${route}`).toBe(404);
  }
});
