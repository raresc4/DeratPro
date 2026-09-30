import type { ComponentType, SVGProps } from "react";
import { BadgeIcon, ClockIcon, ContractIcon, VerifiedIcon } from "./whyUsIcons";

/**
 * A single reason to choose DeratPro, rendered as a {@link FeatureCard}.
 *
 * Copy lives here (mirroring `servicesContent.ts` / `heroContent.ts`) so the
 * exact same strings are used across breakpoints — only the styling is
 * responsive, never the wording.
 */
export interface Advantage {
  /** Stable id, used as the React key. */
  id: string;
  /** Advantage name, rendered as the card's `<h3>`. */
  title: string;
  /** One- to two-sentence supporting description. */
  description: string;
  /** Decorative inline icon for the card's tile. */
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * Tailwind text-color utility for the icon on its neutral tile. Each card
   * uses a slightly different accent to match the reference design; kept as a
   * closed string-literal union so only the four vetted tokens are allowed.
   */
  iconColorClass:
    | "text-secondary"
    | "text-on-secondary-container"
    | "text-on-tertiary-container";
}

/**
 * The four core selling points. Single source of truth for the "De ce noi"
 * section copy; consumed by {@link WhyUs} and rendered via {@link FeatureCard}.
 * Order matches the reference design.
 */
export const advantages: readonly Advantage[] = [
  {
    id: "interventie",
    title: "1. Intervenție rapidă",
    description:
      "Echipe mobile pregătite în maximum 4 ore de la apel pentru rezolvarea rapidă a oricărei urgențe de contaminare.",
    Icon: ClockIcon,
    iconColorClass: "text-on-secondary-container",
  },
  {
    id: "substante",
    title: "2. Substanțe avizate",
    description:
      "Produse de grad medical agreate de Ministerul Sănătății & DSP, biodegradabile și sigure pentru om și ecosistem.",
    Icon: VerifiedIcon,
    iconColorClass: "text-secondary",
  },
  {
    id: "tehnicieni",
    title: "3. Tehnicieni autorizați",
    description:
      "Personal instruit periodic, echipat complet și certificat conform cerințelor riguroase ale Comunității Europene.",
    Icon: BadgeIcon,
    iconColorClass: "text-on-tertiary-container",
  },
  {
    id: "garantie",
    title: "4. Garanție scrisă",
    description:
      "Proces verbal, certificat de conformitate și re-intervenție 100% gratuită dacă problemele reapar pe durata garanției.",
    Icon: ContractIcon,
    iconColorClass: "text-secondary",
  },
] as const;

/**
 * Section header copy, shared across breakpoints. Kept beside the advantages
 * array so all "De ce noi" wording has a single import surface.
 */
export const whyUsHeader = {
  /** Uppercase technical eyebrow above the heading. */
  eyebrow: "Standarde Medicale de Igienă",
  /** Main section heading. */
  title: "De ce aleg companiile și proprietarii DeratPro?",
  /** Supporting paragraph under the heading. */
  subtitle:
    "Nu facem compromisuri când vine vorba de sănătate și siguranță perimetrală. Fiecare procedură este auditată și certificată.",
} as const;
