import { ctaLink, phone } from "../header/navLinks";

export interface HeroContent {
  badge: string;
  headlineLead: string;
  headlineAccent: string;
  subtitle: string;
}

export const heroContent: HeroContent = {
  badge: "Disponibili 24/7 • Autorizat DSP & Ministerul Sănătății",
  headlineLead: "Soluții Profesionale și Sigure de Bioprotecție",
  headlineAccent: "Deratizare, Dezinsecție & Dezinfecție",
  subtitle:
    "Intervenții rapide, substanțe certificate non-toxice pentru oameni și animale de companie, garantate 100% conform normelor europene.",
};

export const heroPrimaryCtaLabel = "Cere ofertă gratuită";

export { ctaLink, phone };
