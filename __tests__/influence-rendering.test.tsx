import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import InfluenceProfile from "../src/app/(index)/people/[slug]/page";
import { SourceList } from "../src/components/influence/ArchiveUI";

test("profiles render their sources and comparison link without retired one-pagers", async () => {
  const element = await InfluenceProfile({ params: Promise.resolve({ slug: "paul-graham" }) });
  const html = renderToStaticMarkup(element);
  assert.match(html, /Paul Graham/);
  assert.match(html, /Sources/);
  assert.match(html, /href="\/compare\?left=paul-graham"/);
  assert.doesNotMatch(html, /href="\/(?:library|persona|category|template)(?:[/?"#])/);
});

test("unknown profiles use the not found boundary", async () => {
  await assert.rejects(
    InfluenceProfile({ params: Promise.resolve({ slug: "not-a-profile" }) }),
    (error: unknown) => error instanceof Error && error.message.includes("NEXT_HTTP_ERROR_FALLBACK;404"),
  );
});

test("source lists show each URL once", () => {
  const html = renderToStaticMarkup(<SourceList sources={[
    { label: "One", url: "https://example.com/source" },
    { label: "Same source", url: "https://example.com/source" },
    { label: "Two", url: "https://example.com/other" },
  ]} />);
  assert.equal((html.match(/href="https:\/\/example.com\/source"/g) ?? []).length, 1);
  assert.match(html, /href="https:\/\/example.com\/other"/);
});
