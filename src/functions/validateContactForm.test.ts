import { describe, expect, it } from "vitest";
import type { ContactFormValues } from "../models/contact";
import {
  contactValidationMessages,
  validateContactForm,
} from "./validateContactForm";

/** A fully valid baseline that individual tests can override per field. */
function validValues(
  overrides: Partial<ContactFormValues> = {},
): ContactFormValues {
  return {
    name: "Popescu Andrei",
    phone: "0722000000",
    service: "pachet_complet",
    surface: "",
    message: "",
    consent: true,
    ...overrides,
  };
}

describe("validateContactForm", () => {
  it("returns no errors for valid input (surface and message optional)", () => {
    expect(validateContactForm(validValues())).toEqual({});
  });

  it("flags an empty / whitespace-only name", () => {
    expect(validateContactForm(validValues({ name: "   " })).name).toBe(
      contactValidationMessages.name,
    );
  });

  it("accepts a 10-digit phone number", () => {
    expect(validateContactForm(validValues({ phone: "0722000000" })).phone).toBe(
      undefined,
    );
  });

  it("accepts a 10-digit phone number with spaces", () => {
    expect(
      validateContactForm(validValues({ phone: "0722 000 000" })).phone,
    ).toBe(undefined);
  });

  it("rejects a phone number that is too short", () => {
    expect(validateContactForm(validValues({ phone: "07123" })).phone).toBe(
      contactValidationMessages.phone,
    );
  });

  it("rejects a phone number containing non-digits", () => {
    expect(validateContactForm(validValues({ phone: "0722abcxyz" })).phone).toBe(
      contactValidationMessages.phone,
    );
  });

  it("flags a missing service selection", () => {
    expect(validateContactForm(validValues({ service: "" })).service).toBe(
      contactValidationMessages.service,
    );
  });

  it("flags missing consent", () => {
    expect(validateContactForm(validValues({ consent: false })).consent).toBe(
      contactValidationMessages.consent,
    );
  });

  it("reports multiple errors at once", () => {
    const errors = validateContactForm(
      validValues({ name: "", phone: "1", service: "", consent: false }),
    );
    expect(Object.keys(errors).sort()).toEqual([
      "consent",
      "name",
      "phone",
      "service",
    ]);
  });
});
