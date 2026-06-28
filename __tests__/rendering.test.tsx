import assert from "node:assert/strict";
import test from "node:test";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import CategoryPage from "../src/app/category/[category]/page.tsx";
import HomePage from "../src/app/page.tsx";
import { Button } from "../src/components/ui/button.tsx";
import { Badge } from "../src/components/ui/badge.tsx";
import { categories, getContentByCategory, personas, templates } from "../src/lib/content.ts";

test("home page renders category, persona, and template navigation", () => {
  const html = renderToStaticMarkup(<HomePage />);

  assert.match(html, />Compendium</);
  assert.match(html, new RegExp(`href="/category/${categories[0].id}"`));
  assert.match(html, new RegExp(`href="/persona/${personas[0].slug}"`));
  assert.match(
    html,
    new RegExp(`href="/template/${templates[0].filename.replace(".pdf", "")}"`),
  );
  assert.match(html, new RegExp(personas[0].name));
  assert.match(html, /PDF Template/);
});

test("category page renders matching content with persona context", async () => {
  const categoryId = "startups";
  const content = getContentByCategory(categoryId);
  const element = await CategoryPage({
    params: Promise.resolve({ category: categoryId }),
  });
  const html = renderToStaticMarkup(element);

  assert.match(html, />Startups</);
  assert.match(html, new RegExp(`${content.length} items in this category`));
  assert.match(html, /href="\/persona\/marc-andreessen"/);
  assert.match(html, /Pmarca_antistartup.png/);
  assert.match(html, /Marc Andreessen/);
});

test("category page renders a not found state for unknown categories", async () => {
  const element = await CategoryPage({
    params: Promise.resolve({ category: "missing-category" }),
  });
  const html = renderToStaticMarkup(element);

  assert.match(html, /Category not found/);
  assert.match(html, /href="\//);
  assert.match(html, /Back to Home/);
});

test("button and badge variants render their selected styles and content", () => {
  const buttonHtml = renderToStaticMarkup(
    <Button variant="destructive" size="sm" disabled className="danger-action">
      Delete
    </Button>,
  );
  const badgeHtml = renderToStaticMarkup(
    <Badge variant="secondary" className="status-pill">
      Active
    </Badge>,
  );

  assert.match(buttonHtml, /Delete/);
  assert.match(buttonHtml, /bg-red-500/);
  assert.match(buttonHtml, /h-8/);
  assert.match(buttonHtml, /danger-action/);
  assert.match(buttonHtml, /disabled=""/);

  assert.match(badgeHtml, /Active/);
  assert.match(badgeHtml, /bg-neutral-100/);
  assert.match(badgeHtml, /status-pill/);
});
