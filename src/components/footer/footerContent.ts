import { phone } from "../header/navLinks";

export interface FooterLink {
  label: string;
  href: string;
}

export const footerBrand = {
  blurb:
    "Servicii profesionale complete de deratizare, dezinsecție și dezinfecție la standarde europene. Soluții sigure, fără risc biologic.",
  availability: "Program intervenții: Non-Stop 24/7",
} as const;

export const footerColumnTitles = {
  services: "Servicii DDD",
  authorizations: "Autorizații & Norme",
  contact: "Contact Rapid",
} as const;

export const serviceLinks: readonly FooterLink[] = [
  { label: "Deratizare Ecologică", href: "#" },
  { label: "Dezinsecție Nebulizare ULV", href: "#" },
  { label: "Dezinfecție Spitalicească", href: "#" },
  { label: "Abonamente Mentenanță HoReCa", href: "#" },
] as const;

export const authorizations: readonly string[] = [
  "Autorizație DSP București",
  "Aviz DSVSA & Ministerul Mediului",
  "Conformitate Directiva CE 98/8",
  "Standard European EN 16636",
] as const;

export const footerContact = {
  phone,
  email: {
    display: "contact@deratpro.ro",
    href: "mailto:contact@deratpro.ro",
  },
  coverage: "București & Ilfov (Intervenție < 4 ore)",
} as const;

export const legalLinks: readonly FooterLink[] = [
  { label: "Termeni și Condiții", href: "#" },
  { label: "Politică Confidențialitate", href: "#" },
  { label: "Certificări DSP & DSV", href: "#" },
  { label: "Hartă Acoperire Națională", href: "#" },
  { label: "ANPC", href: "#" },
] as const;

export const footerCopyright =
  "© 2026 DeratPro DDD Services S.R.L. Toate drepturile rezervate. Autorizat DSP, DSVSA & Ministerul Sănătății.";

export { phone };
