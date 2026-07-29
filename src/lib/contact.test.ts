import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getContactConfig, validateContactInput } from "./contact";

describe("validateContactInput", () => {
  it("rejects missing required fields", () => {
    const result = validateContactInput({
      name: "",
      email: "a@b.com",
      reason: "General question",
      message: "Hello",
    });
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.code, "INVALID_INPUT");
  });

  it("rejects invalid email", () => {
    const result = validateContactInput({
      name: "Alex",
      email: "not-an-email",
      reason: "General question",
      message: "Hello there",
    });
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.code, "INVALID_INPUT");
  });

  it("rejects invalid optional URL", () => {
    const result = validateContactInput({
      name: "Alex",
      email: "alex@example.com",
      reason: "General question",
      message: "Hello there",
      pageUrl: "ftp://bad",
    });
    assert.equal(result.ok, false);
  });

  it("rejects honeypot spam", () => {
    const result = validateContactInput({
      name: "Alex",
      email: "alex@example.com",
      reason: "General question",
      message: "Hello there",
      website: "http://spam.example",
    });
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.code, "SPAM");
  });

  it("accepts valid payload", () => {
    const result = validateContactInput({
      name: "Alex Rivera",
      email: "alex@example.com",
      reason: "Correction or factual update",
      message: "The trolley note on the parking page needs a recheck.",
      businessName: "",
      pageUrl: "https://www.smokyinsider.com/smokies-parking-trolley-guide",
    });
    assert.equal(result.ok, true);
  });

  it("rejects oversized message", () => {
    const result = validateContactInput({
      name: "Alex",
      email: "alex@example.com",
      reason: "General question",
      message: "x".repeat(5001),
    });
    assert.equal(result.ok, false);
  });
});

describe("getContactConfig", () => {
  it("reports not configured when env is empty", () => {
    const prev = {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      CONTACT_EMAIL: process.env.CONTACT_EMAIL,
      EMAIL_FROM: process.env.EMAIL_FROM,
    };
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_EMAIL;
    delete process.env.EMAIL_FROM;

    const config = getContactConfig();
    assert.equal(config.configured, false);

    process.env.RESEND_API_KEY = prev.RESEND_API_KEY;
    process.env.CONTACT_EMAIL = prev.CONTACT_EMAIL;
    process.env.EMAIL_FROM = prev.EMAIL_FROM;
  });
});
