import type { ContactFormErrors, ContactFormValues } from "../models/contact";

export const contactValidationMessages = {
  name: "Numele complet este obligatoriu",
  phone: "Introduceți un număr de telefon valid (10 cifre)",
  service: "Selectați serviciul dorit din listă",
  consent: "Trebuie să acceptați prelucrarea datelor",
} as const;

const PHONE_DIGIT_COUNT = 10;

/**
 * Validates the contact form values entirely on the client (there is no
 * backend). Pure function: given the same input it always returns the same
 * errors, so it is trivially unit-testable and safe to call on every submit.
 *
 * Rules:
 * - `name`: required, must be non-empty after trimming.
 * - `phone`: required, must contain exactly 10 digits once spaces are removed.
 * - `service`: required, must be a non-empty selected option value.
 * - `consent`: must be `true`.
 * - `surface` and `message` are optional and never produce errors.
 *
 * @returns An object with a message for each invalid field. An empty object
 *   means the form is valid.
 */
export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length === 0) {
    errors.name = contactValidationMessages.name;
  }

  const phoneDigits = values.phone.replace(/\s/g, "");
  if (!/^\d+$/.test(phoneDigits) || phoneDigits.length !== PHONE_DIGIT_COUNT) {
    errors.phone = contactValidationMessages.phone;
  }

  if (values.service.trim().length === 0) {
    errors.service = contactValidationMessages.service;
  }

  if (!values.consent) {
    errors.consent = contactValidationMessages.consent;
  }

  return errors;
}
