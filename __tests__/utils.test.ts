import assert from "node:assert/strict";
import test from "node:test";

import { cn } from "../src/lib/utils.ts";

test("cn combines conditional classes and removes conflicting Tailwind utilities", () => {
  assert.equal(cn("px-2", false && "hidden", ["text-sm", "px-4"]), "text-sm px-4");
});

test("cn handles empty inputs without adding whitespace", () => {
  assert.equal(cn(undefined, null, ""), "");
});
