import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { archive } from "../src/lib/influence/archive";

test("archive profiles resolve to portraits and field notes resolve to profiles", () => {
  const { categories, people, themes } = archive;
  const slugs = new Set(people.map((person) => person.slug));
  const fieldIds = new Set(categories.map((category) => category.id));

  assert.equal(slugs.size, people.length);
  assert.equal(new Set(people.map((person) => person.id)).size, people.length);
  assert.equal(new Set(themes.map((theme) => theme.slug)).size, themes.length);

  for (const person of people) {
    assert.ok(fieldIds.has(person.category), person.slug);
    assert.ok(person.milestones.length > 0, person.slug);
    assert.ok(person.milestones.every((event) => Number.isFinite(event.year)), person.slug);
    for (const source of [...person.sources, ...person.ideaSources, person.quote, person.funFactSource]) {
      assert.ok(source.label.trim(), person.slug);
      assert.ok(["https:", "http:"].includes(new URL(source.url).protocol), person.slug);
    }
    assert.ok(existsSync(`public/content/influence/${person.slug}.webp`), person.slug);
  }

  for (const theme of themes) {
    for (const slug of theme.people) assert.ok(slugs.has(slug), `${theme.slug}: ${slug}`);
  }
});
