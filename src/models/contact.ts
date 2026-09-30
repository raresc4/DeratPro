/**
 * Shared types for the DeratPro contact / quote-request form.
 *
 * These are intentionally framework-agnostic so the pure helpers in
 * `src/functions` (validation, reference-code generation) and the
 * `ContactForm` component can share a single source of truth.
 */

/** The user-editable values of the quote-request form. */
export interface ContactFormValues {
  /** Full name or company. */
  name: string;
  /** Phone number as typed (may contain spaces; validated to 10 digits). */
  phone: string;
  /** Selected service option `value` (empty string means "not selected"). */
  service: string;
  /** Selected approximate-surface option `value` (optional). */
  surface: string;
  /** Free-text details about the location and problem (optional). */
  message: string;
  /** GDPR consent — must be `true` to submit. */
  consent: boolean;
}

/**
 * The set of fields that can carry a validation error. Each present key maps to
 * a human-readable Romanian message shown inline and referenced by the summary
 * banner. Absent keys are valid.
 */
export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

/**
 * The form's high-level lifecycle:
 * - `editing`: the default form is shown (with or without inline errors).
 * - `success`: the confirmation panel is shown after a valid submit.
 */
export type ContactFormStatus = "editing" | "success";

/** A single `<option>` for the service / surface dropdowns. */
export interface SelectOption {
  /** Machine value submitted / stored. */
  value: string;
  /** Human-readable label shown in the dropdown. */
  label: string;
}
