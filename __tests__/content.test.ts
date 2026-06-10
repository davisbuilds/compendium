import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

import {
  categories,
  getContentByCategory,
  getPersonaBySlug,
  personas,
  templates,
  type Category,
} from "../src/lib/content.ts";

const categoryIds = new Set<Category>(categories.map((category) => category.id));

test("every category has display metadata and a unique id", () => {
  assert.equal(categories.length, categoryIds.size);

  for (const category of categories) {
    assert.ok(category.label.length > 0);
    assert.match(category.color, /dark:/);
  }
});

test("every persona has a matching slug, avatar, and content assets", () => {
  assert.equal(personas.length, new Set(personas.map((persona) => persona.slug)).size);

  for (const persona of personas) {
    assert.equal(persona.id, persona.slug);
    assert.ok(persona.name.length > 0);
    assert.ok(persona.description.length > 0);
    assert.equal(persona.avatar, "avatar.png");
    assert.ok(existsSync(join("public", "content", "personas", persona.slug, persona.avatar)));
    assert.ok(persona.content.length > 0);

    for (const item of persona.content) {
      assert.equal(item.type, "image");
      assert.ok(item.title.length > 0);
      assert.ok(existsSync(join("public", "content", "personas", persona.slug, item.filename)));
      assert.ok(item.categories.length > 0);

      for (const category of item.categories) {
        assert.ok(categoryIds.has(category));
      }
    }
  }
});

test("persona lookup returns the matching persona and undefined for unknown slugs", () => {
  assert.equal(getPersonaBySlug("sam-altman")?.name, "Sam Altman");
  assert.equal(getPersonaBySlug("missing-persona"), undefined);
});

test("category lookup returns content in catalog order with persona context", () => {
  const startupResults = getContentByCategory("startups");

  assert.deepEqual(
    startupResults.map(({ persona, item }) => `${persona.slug}:${item.filename}`),
    [
      "marc-andreessen:Pmarca_antistartup.png",
      "paul-graham:PG_HowToRaiseMoney.png",
      "paul-graham:PG_HowToStartStartup.png",
      "sam-altman:Altman_HowToStartStartup.png",
    ],
  );

  for (const category of categories) {
    const results = getContentByCategory(category.id);

    assert.ok(results.length > 0);
    for (const result of results) {
      assert.ok(result.item.categories.includes(category.id));
      assert.equal(getPersonaBySlug(result.persona.slug), result.persona);
    }
  }
});

test("templates are backed by pdf files and use filename-derived slugs", () => {
  assert.equal(templates.length, new Set(templates.map((template) => template.filename)).size);

  for (const template of templates) {
    assert.match(template.filename, /\.pdf$/);
    assert.ok(template.title.length > 0);
    assert.ok(template.description.length > 0);
    assert.ok(existsSync(join("public", "content", "templates", template.filename)));
  }
});
