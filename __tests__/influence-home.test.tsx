import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import HomePage from "../src/app/(index)/page";

test("Influence Index homepage uses the current brand without retired Library links", () => {
  const html = renderToStaticMarkup(<HomePage />);
  assert.match(html, /The Influence Index/);
  assert.equal(html.includes("Compendium"), false, "homepage must use the current project name");
  assert.match(html, /href="\/people\/ben-thompson"/);
  assert.doesNotMatch(html, /href="\/(?:library|persona|category|template)(?:[/?"#])/);
});
