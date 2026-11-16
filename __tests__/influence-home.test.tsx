import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import HomePage from "../src/app/(index)/page";

test("Compendium opens on the Influence Index and links to the original library", () => {
  const html = renderToStaticMarkup(<HomePage />);
  assert.match(html, /The Influence Index/);
  assert.match(html, /href="\/people\/ben-thompson"/);
  assert.match(html, /href="\/library"/);
});
