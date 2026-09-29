import { ctaLink, phone } from "../header/navLinks";

/**
 * Copy for the hero section. Kept as typed constants (mirroring the header's
 * `navLinks.ts`) so the same strings are used across breakpoints — only the
 * styling is responsive, never the wording.
 */
export interface HeroContent {
  /** Live-status pill text above the headline. */
  badge: string;
  /** First part of the headline, in the default light color. */
  headlineLead: string;
  /** Second part of the headline, emphasized in the accent color. */
  headlineAccent: string;
  /** Supporting paragraph shown on desktop (hidden on mobile). */
  subtitle: string;
}

export const heroContent: HeroContent = {
  badge: "Disponibili 24/7 • Autorizat DSP & Ministerul Sănătății",
  headlineLead: "Soluții Profesionale și Sigure de Bioprotecție:",
  headlineAccent: "Deratizare, Dezinsecție & Dezinfecție",
  subtitle:
    "Intervenții rapide, substanțe certificate non-toxice pentru oameni și animale de companie, garantate 100% conform normelor europene.",
};

/**
 * Primary CTA label for the hero. Intentionally distinct from the header's
 * shorter "Cere ofertă" so the hero reads as the main conversion point, while
 * both still point at the same `#contact` target via {@link ctaLink}.
 */
export const heroPrimaryCtaLabel = "Cere ofertă gratuită";

// Re-exported for convenience so hero consumers have a single import surface.
export { ctaLink, phone };
