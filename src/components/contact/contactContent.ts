import type { SelectOption } from "../../models/contact";
import { phone } from "../header/navLinks";

/**
 * Copy and option data for the contact / quote-request form.
 *
 * Kept as typed constants (mirroring `heroContent.ts` and `navLinks.ts`) so the
 * exact same wording is used across breakpoints — only the styling is
 * responsive, never the copy. The web mockup
 * (`docs/design/web/code.html`) is the source of truth for this wording.
 */

/** Header block: eyebrow, title and supporting subtitle. */
export const contactHeader = {
  eyebrow: "Simulator Formular",
  title: "Cere o ofertă personalizată",
  subtitle: "Răspundem în maximum 15 minute cu o cotație exactă.",
} as const;

/** Per-field labels and placeholders. */
export const contactFields = {
  name: {
    label: "Nume complet sau Companie",
    placeholder: "Ex: Popescu Andrei / S.C. Alfa SRL",
  },
  phone: {
    label: "Număr de telefon",
    placeholder: "07xxxxxxxx",
  },
  service: {
    label: "Serviciu solicitat",
    placeholder: "Selectează serviciul dorit",
  },
  surface: {
    label: "Suprafață aproximativă",
    placeholder: "Selectează suprafața",
  },
  message: {
    label: "Detalii despre locație și problemă",
    placeholder:
      "Menționează tipul de spațiu, dacă s-a mai intervenit anterior și altceva ce vrei să ne transmiți...",
  },
} as const;

/** GDPR consent checkbox copy. */
export const contactConsentLabel =
  "Sunt de acord cu prelucrarea datelor în scopul transmiterii ofertei tehnice.";

/** Button labels. */
export const contactButtons = {
  submit: "Trimite solicitarea",
  retry: "Trimite o altă solicitare",
} as const;

/** Global error-summary banner text shown above the fields on invalid submit. */
export const contactErrorBanner =
  "Te rugăm să corectezi câmpurile evidențiate mai jos înainte de a trimite solicitarea.";

/** Success confirmation panel copy. */
export const contactSuccess = {
  heading: "Solicitarea a fost înregistrată!",
  bodyLead: "Mulțumim pentru încredere. Un specialist DeratPro te va contacta în maximum ",
  bodyEmphasis: "15 minute",
  bodyTail: " pentru confirmarea detaliilor și trimiterea ofertei ferme.",
  referenceLabel: "Număr de referință intervenție:",
} as const;

/** Options for the "Serviciu solicitat" dropdown. */
export const serviceOptions: readonly SelectOption[] = [
  { value: "pachet_complet", label: "Pachet Complet DDD (Recomandat)" },
  { value: "deratizare", label: "Deratizare (Șoareci, Șobolani)" },
  { value: "dezinsectie", label: "Dezinsecție (Gândaci, Ploșnițe, Căpușe)" },
  { value: "dezinfectie", label: "Dezinfecție Nebulizare Virucidă" },
] as const;

/** Options for the "Suprafață aproximativă" dropdown. */
export const surfaceOptions: readonly SelectOption[] = [
  { value: "sub_60", label: "Sub 60 m² (Apartament / Spațiu mic)" },
  { value: "60_200", label: "60 - 200 m² (Casă / Sediu firmă)" },
  { value: "200_500", label: "200 - 500 m² (Depozit / Restaurant)" },
  { value: "peste_500", label: "Peste 500 m² (Spațiu industrial)" },
] as const;

// Re-exported so contact consumers have a single import surface.
export { phone };
