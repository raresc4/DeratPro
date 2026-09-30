import { describe, expect, it } from "vitest";
import { generateReferenceCode } from "./generateReferenceCode";

describe("generateReferenceCode", () => {
  it("matches the #DP-2025-XXXX format", () => {
    expect(generateReferenceCode()).toMatch(/^#DP-2025-\d{4}$/);
  });

  it("zero-pads small numbers to 4 digits", () => {
    // random() -> 0 yields the smallest possible code.
    expect(generateReferenceCode(() => 0)).toBe("#DP-2025-0000");
  });

  it("produces the expected code for a stubbed random value", () => {
    // 0.8841 * 10000 = 8841
    expect(generateReferenceCode(() => 0.8841)).toBe("#DP-2025-8841");
  });

  it("never exceeds 4 digits at the top of the range", () => {
    // random() is always < 1, so floor(0.9999 * 10000) = 9999.
    expect(generateReferenceCode(() => 0.99999)).toBe("#DP-2025-9999");
  });
});
