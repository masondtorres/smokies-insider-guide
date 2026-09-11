import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { seasonalWarning } from "./conditions";

describe("seasonalWarning", () => {
  it("uses fall language in October", () => {
    const result = seasonalWarning(new Date("2026-10-15T12:00:00Z"));
    assert.match(result.title, /Fall/i);
  });

  it("uses winter language in January", () => {
    const result = seasonalWarning(new Date("2026-01-15T12:00:00Z"));
    assert.match(result.title, /Winter/i);
  });
});
