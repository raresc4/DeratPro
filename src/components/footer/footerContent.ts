import { phone } from "../header/navLinks";

/**
 * Copy and link data for the site footer.
 *
 * Kept as typed constants (mirroring `heroContent.ts`, `whyUsContent.ts` and
 * `contactContent.ts`) so the exact same wording is used across breakpoints —
 * only the styling is responsive, never the copy. The web mockup
 * (`docs/design/web/code.html`) is the source of truth for this wording.
 *
 * Per the current scope the legal and service links are not wired to real
 * destinations yet, so they use `#` placeholders. The phone and email are the
 * meaningful contact points and use real `tel:` / `mailto:` targets.
 */

/** A single footer link rendered as an anchor. */
export interface FooterLink {
  label: string;
  href: string;
}

/** Brand column: wordmark blurb plus the always-on availability line. */
export const footerBrand = {
  /** Supporting paragraph under the "DeratPro" wordmark. */
  blurb:
    "Servicii profesionale complete de deratizare, dezinsecție și dezinfecție la standarde europene. Soluții sigure, fără risc biologic.",
  /** Availability line shown beside the schedule icon. */
  availability: "Program intervenții: Non-Stop 24/7",
} as const;

/** Uppercase eyebrow labels for the three link/info columns. */
export const footerColumnTitles = {
  services: "Servicii DDD",
  authorizations: "Autorizații & Norme",
  contact: "Contact Rapid",
} as const;

/** "Servicii DDD" column — placeholder links (not yet wired). */
export const serviceLinks: readonly FooterLink[] = [
  { label: "Deratizare Ecologică", href: "#" },
  { label: "Dezinsecție Nebulizare ULV", href: "#" },
  { label: "Dezinfecție Spitalicească", href: "#" },
  { label: "Abonamente Mentenanță HoReCa", href: "#" },
] as const;

/**
 * "Autorizații & Norme" column — informational, non-interactive text items
 * (rendered as `<span>`s, not links).
 */
export const authorizations: readonly string[] = [
  "Autorizație DSP București",
  "Aviz DSVSA & Ministerul Mediului",
  "Conformitate Directiva CE 98/8",
  "Standard European EN 16636",
] as const;

/** "Contact Rapid" column — real contact targets plus coverage note. */
export const footerContact = {
  /** Shared with the header/hero via `navLinks.ts` so the number is single-sourced. */
  phone,
  /** Support email. */
  email: {
    display: "contact@deratpro.ro",
    href: "mailto:contact@deratpro.ro",
  },
  /** Coverage / response-time note. */
  coverage: "București & Ilfov (Intervenție < 4 ore)",
} as const;

/** Bottom bar legal links — placeholder links (not yet wired). */
export const legalLinks: readonly FooterLink[] = [
  { label: "Termeni și Condiții", href: "#" },
  { label: "Politică Confidențialitate", href: "#" },
  { label: "Certificări DSP & DSV", href: "#" },
  { label: "Hartă Acoperire Națională", href: "#" },
  { label: "ANPC", href: "#" },
] as const;

/** Copyright line shown at the bottom of the footer. */
export const footerCopyright =
  "© 2025 DeratPro DDD Services S.R.L. Toate drepturile rezervate. Autorizat DSP, DSVSA & Ministerul Sănătății.";

// Re-exported so footer consumers have a single import surface.
export { phone };
