import { useId, useRef, useState, type ChangeEvent, type SubmitEvent } from "react";
import type {
  ContactFormErrors,
  ContactFormStatus,
  ContactFormValues,
} from "../../models/contact";
import { generateReferenceCode } from "../../functions/generateReferenceCode";
import { validateContactForm } from "../../functions/validateContactForm";
import {
  contactButtons,
  contactConsentLabel,
  contactErrorBanner,
  contactFields,
  contactHeader,
  contactSuccess,
  serviceOptions,
  surfaceOptions,
} from "./contactContent";
import { CheckCircleIcon, ErrorIcon, RefreshIcon, SendIcon } from "./icons";

const CONTACT_HEADING_ID = "contact-heading";

const EMPTY_VALUES: ContactFormValues = {
  name: "",
  phone: "",
  service: "",
  surface: "",
  message: "",
  consent: false,
};

function fieldClasses(hasError: boolean): string {
  const base =
    "w-full rounded-lg bg-surface-container-lowest px-4 py-3 font-jakarta text-body-md text-on-surface transition-all placeholder:text-outline focus:outline-none focus-visible:ring-2";
  return hasError
    ? `${base} border-2 border-error bg-error-container/20 focus-visible:ring-error/25`
    : `${base} border border-outline-variant focus:border-secondary focus-visible:ring-secondary/25`;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("editing");
  const [referenceCode, setReferenceCode] = useState<string>("");

  const bannerRef = useRef<HTMLDivElement>(null);

  // Stable, unique ids so labels, inputs and their error messages are wired
  // together for assistive technology across multiple instances.
  const baseId = useId();
  const fieldId = (field: keyof ContactFormValues) => `${baseId}-${field}`;
  const errorId = (field: keyof ContactFormValues) => `${baseId}-${field}-error`;

  /**
   * Updates a single field and clears its error (if any) so the message
   * disappears as soon as the user starts correcting it.
   */
  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ): void {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleTextChange(
    field: keyof ContactFormValues,
  ): (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void {
    return (event) => updateField(field, event.target.value);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    const nextErrors = validateContactForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      // Move focus to the summary banner so screen-reader users hear the error
      // context immediately after a failed submit.
      requestAnimationFrame(() => bannerRef.current?.focus());
      return;
    }

    setErrors({});
    setReferenceCode(generateReferenceCode());
    setStatus("success");
  }

  function handleReset(): void {
    setValues(EMPTY_VALUES);
    setErrors({});
    setReferenceCode("");
    setStatus("editing");
  }

  const hasErrors = Object.keys(errors).length > 0;

  const submitButtonClasses =
    "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-4 font-jakarta text-label-lg font-semibold text-on-secondary shadow-sm transition-all hover:bg-secondary/90 hover:shadow active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest";

  return (
    <section
      id="contact"
      aria-labelledby={CONTACT_HEADING_ID}
      className="border-t border-outline-variant/30 bg-surface-container-low py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-2xl px-4 md:px-8">
        <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm md:p-8">
          <div className="mb-6 border-b border-outline-variant/30 pb-6">
            <span className="mb-1 block font-jakarta text-label-technical uppercase tracking-widest text-secondary">
              {contactHeader.eyebrow}
            </span>
            <h2
              id={CONTACT_HEADING_ID}
              className="font-manrope text-headline-sm font-semibold text-on-surface"
            >
              {contactHeader.title}
            </h2>
            <p className="mt-1 font-jakarta text-body-md text-on-surface-variant">
              {contactHeader.subtitle}
            </p>
          </div>

          {status === "success" ? (
            <SuccessPanel
              referenceCode={referenceCode}
              onReset={handleReset}
            />
          ) : (
            <form noValidate className="space-y-5" onSubmit={handleSubmit}>
              {hasErrors && (
                <div
                  ref={bannerRef}
                  role="alert"
                  tabIndex={-1}
                  className="flex items-start gap-3 rounded-lg border border-error/20 bg-error-container/60 p-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-error/40"
                >
                  <ErrorIcon className="mt-0.5 h-5 w-5 shrink-0 text-error" />
                  <p className="font-jakarta text-label-md text-on-error-container">
                    {contactErrorBanner}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={fieldId("name")}
                    className={`mb-1.5 block font-jakarta text-label-lg font-semibold ${
                      errors.name ? "text-error" : "text-on-surface"
                    }`}
                  >
                    {contactFields.name.label}
                  </label>
                  <input
                    id={fieldId("name")}
                    type="text"
                    value={values.name}
                    onChange={handleTextChange("name")}
                    placeholder={contactFields.name.placeholder}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? errorId("name") : undefined}
                    className={fieldClasses(Boolean(errors.name))}
                  />
                  {errors.name && (
                    <span
                      id={errorId("name")}
                      className="mt-1 block font-jakarta text-label-technical font-bold text-error"
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={fieldId("phone")}
                    className={`mb-1.5 block font-jakarta text-label-lg font-semibold ${
                      errors.phone ? "text-error" : "text-on-surface"
                    }`}
                  >
                    {contactFields.phone.label}
                  </label>
                  <input
                    id={fieldId("phone")}
                    type="tel"
                    value={values.phone}
                    onChange={handleTextChange("phone")}
                    placeholder={contactFields.phone.placeholder}
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={errors.phone ? errorId("phone") : undefined}
                    className={fieldClasses(Boolean(errors.phone))}
                  />
                  {errors.phone && (
                    <span
                      id={errorId("phone")}
                      className="mt-1 block font-jakarta text-label-technical font-bold text-error"
                    >
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor={fieldId("service")}
                  className={`mb-1.5 block font-jakarta text-label-lg font-semibold ${
                    errors.service ? "text-error" : "text-on-surface"
                  }`}
                >
                  {contactFields.service.label}
                </label>
                <select
                  id={fieldId("service")}
                  value={values.service}
                  onChange={handleTextChange("service")}
                  aria-invalid={errors.service ? true : undefined}
                  aria-describedby={
                    errors.service ? errorId("service") : undefined
                  }
                  className={fieldClasses(Boolean(errors.service))}
                >
                  <option value="">{contactFields.service.placeholder}</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span
                    id={errorId("service")}
                    className="mt-1 block font-jakarta text-label-technical font-bold text-error"
                  >
                    {errors.service}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor={fieldId("surface")}
                  className="mb-1.5 block font-jakarta text-label-lg font-semibold text-on-surface"
                >
                  {contactFields.surface.label}
                </label>
                <select
                  id={fieldId("surface")}
                  value={values.surface}
                  onChange={handleTextChange("surface")}
                  className={fieldClasses(false)}
                >
                  <option value="">{contactFields.surface.placeholder}</option>
                  {surfaceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor={fieldId("message")}
                  className="mb-1.5 block font-jakarta text-label-lg font-semibold text-on-surface"
                >
                  {contactFields.message.label}
                </label>
                <textarea
                  id={fieldId("message")}
                  rows={3}
                  value={values.message}
                  onChange={handleTextChange("message")}
                  placeholder={contactFields.message.placeholder}
                  className={fieldClasses(false)}
                />
              </div>

              <div className="pt-1">
                <div className="flex items-start gap-2">
                  <input
                    id={fieldId("consent")}
                    type="checkbox"
                    checked={values.consent}
                    onChange={(event) =>
                      updateField("consent", event.target.checked)
                    }
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={
                      errors.consent ? errorId("consent") : undefined
                    }
                    className="mt-0.5 h-4 w-4 rounded border-outline-variant text-secondary accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
                  />
                  <label
                    htmlFor={fieldId("consent")}
                    className={`font-jakarta text-label-md ${
                      errors.consent ? "text-error" : "text-on-surface-variant"
                    }`}
                  >
                    {contactConsentLabel}
                  </label>
                </div>
                {errors.consent && (
                  <span
                    id={errorId("consent")}
                    className="mt-1 block font-jakarta text-label-technical font-bold text-error"
                  >
                    {errors.consent}
                  </span>
                )}
              </div>

              <button type="submit" className={submitButtonClasses}>
                <span>{contactButtons.submit}</span>
                <SendIcon className="h-[18px] w-[18px]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

interface SuccessPanelProps {
  referenceCode: string;
  onReset: () => void;
}

function SuccessPanel({ referenceCode, onReset }: SuccessPanelProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-4 py-10 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shadow-sm">
        <CheckCircleIcon className="h-9 w-9" />
      </div>

      <div className="max-w-md">
        <h3 className="mb-2 font-manrope text-headline-md font-semibold text-on-surface">
          {contactSuccess.heading}
        </h3>
        <p className="font-jakarta text-body-md leading-relaxed text-on-surface-variant">
          {contactSuccess.bodyLead}
          <strong className="font-semibold text-secondary">
            {contactSuccess.bodyEmphasis}
          </strong>
          {contactSuccess.bodyTail}
        </p>
      </div>

      <div className="mt-2 w-full max-w-sm rounded-lg bg-surface-container p-4">
        <span className="mb-1 block font-jakarta text-label-md text-on-surface-variant">
          {contactSuccess.referenceLabel}
        </span>
        <span className="font-manrope text-headline-sm font-bold text-secondary">
          {referenceCode}
        </span>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 rounded font-jakarta text-label-lg font-semibold text-secondary transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest"
      >
        <span className="inline-flex items-center gap-2">
          <RefreshIcon className="h-[18px] w-[18px]" />
          {contactButtons.retry}
        </span>
      </button>
    </div>
  );
}
