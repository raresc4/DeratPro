import type { ComponentType, SVGProps } from "react";
import { AirIcon, SanitizerIcon, ShieldIcon } from "./servicesIcons";

/**
 * A single service offering rendered as a {@link ServiceCard}.
 *
 * Copy lives here (mirroring `heroContent.ts` / `navLinks.ts`) so the exact
 * same strings are used across breakpoints — only the styling is responsive,
 * never the wording. On mobile the {@link ServiceItem.features} list collapses
 * behind a toggle; on desktop it is always visible.
 */
export interface ServiceItem {
  /** Stable id, used for keys and to derive the collapsible panel id. */
  id: string;
  /** Service name, rendered as the card's `<h3>`. */
  title: string;
  /** One- to two-sentence summary shown under the title. */
  description: string;
  /** Three concrete selling points shown as a check list. */
  features: readonly string[];
  /** Decorative inline icon for the card's tile. */
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * Tailwind background-color class for the 2px top accent line. Kept as an
   * explicit class string (not a token name) so Tailwind can statically detect
   * it and the mapping stays colocated with the copy.
   */
  accentClass: string;
}

/**
 * The three core DDD offerings. Single source of truth for the services
 * section copy; consumed by {@link Services} and rendered via
 * {@link ServiceCard}. Order matches the reference design.
 */
export const services: readonly ServiceItem[] = [
  {
    id: "deratizare",
    title: "Deratizare",
    description:
      "Tratamente ecologice și capcane mecanice sigure pentru combaterea rozătoarelor fără pericole secundare pentru copii și animale de companie.",
    features: [
      "Stații de intoxicare securizate cu cheie",
      "Momeală parafinată rezistentă la umiditate",
      "Monitorizare perimetrală continuă",
    ],
    Icon: ShieldIcon,
    accentClass: "bg-secondary",
  },
  {
    id: "dezinsectie",
    title: "Dezinsecție",
    description:
      "Soluții avansate cu atomizor și nebulizare rece pentru spații rezidențiale, birouri și HoReCa, eliminând insectele zburătoare și târâtoare.",
    features: [
      "Ceață rece ULV (Ultra Low Volume)",
      "Substanțe inodore cu remanență extinsă",
      "Zero pete pe mobilier sau tapițerie",
    ],
    Icon: AirIcon,
    accentClass: "bg-tertiary-fixed-dim",
  },
  {
    id: "dezinfectie",
    title: "Dezinfecție",
    description:
      "Nebulizare ULV de nivel spitalicesc, garantând eliminarea în proporție de 99.99% a bacteriilor, ciupercilor, virusurilor și agenților patogeni periculoși.",
    features: [
      "Biocide autorizate de Ministerul Sănătății",
      "Micro-picături ce pătrund în zone inaccesibile",
      "Reintrare sigură în spațiu în sub 60 de minute",
    ],
    Icon: SanitizerIcon,
    accentClass: "bg-secondary-fixed-dim",
  },
] as const;

/**
 * Section header copy, shared across breakpoints. Kept beside the services
 * array so all services wording has a single import surface.
 */
export const servicesHeader = {
  /** Uppercase technical eyebrow above the heading. */
  eyebrow: "Servicii Integrate DDD",
  /** Main section heading. */
  title: "Tratamente Profesionale de Biosecuritate",
  /** Supporting paragraph beside/under the heading. */
  subtitle:
    "Utilizăm echipamente de precizie și protocoale ecologice conforme standardelor EN 16636 pentru spații casnice, birouri și unități de producție alimentară.",
} as const;
