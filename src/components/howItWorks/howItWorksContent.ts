/**
 * A single step in the DeratPro intervention process, rendered as a
 * {@link StepCard}.
 *
 * Copy lives here (mirroring `servicesContent.ts` / `whyUsContent.ts`) so the
 * exact same strings are used across breakpoints — only the styling is
 * responsive, never the wording.
 */
export interface ProcessStep {
  /** Stable id, used as the React key. */
  id: string;
  /** Two-digit order label, rendered as visible text in the badge (e.g. "01"). */
  number: string;
  /** Step name, rendered as the card's `<h3>`. */
  title: string;
  /** One- to two-sentence supporting description. */
  description: string;
  /**
   * Badge emphasis. `"primary"` uses the emerald (secondary) fill to highlight
   * the central step, matching the reference design; `"default"` uses the dark
   * container fill.
   */
  variant: "default" | "primary";
}

/**
 * The three process steps. Single source of truth for the "Cum funcționează"
 * section copy; consumed by {@link HowItWorks} and rendered via
 * {@link StepCard}. Order matches the reference design.
 */
export const steps: readonly ProcessStep[] = [
  {
    id: "contact",
    number: "01",
    title: "Ne suni sau trimiți cererea",
    description:
      "Consultanță telefonică gratuită în 5 minute. Preluăm datele specifice și identificăm gradul de urgență al locației tale.",
    variant: "default",
  },
  {
    id: "evaluare",
    number: "02",
    title: "Evaluare & Plan personalizat",
    description:
      "Stabilim doza optimă de substanță activă, timpul de acțiune și metoda tehnologică adecvată profilului spațiului tău.",
    variant: "primary",
  },
  {
    id: "interventie",
    number: "03",
    title: "Intervenție discretă & Certificat",
    description:
      "Acțiune rapidă fără disconfort și predarea procesului verbal cu certificat DSP complet pentru controalele autorităților.",
    variant: "default",
  },
] as const;

/**
 * Section header copy, shared across breakpoints. Kept beside the steps array
 * so all "Cum funcționează" wording has a single import surface.
 */
export const howItWorksHeader = {
  /** Uppercase technical eyebrow above the heading. */
  eyebrow: "Protocol Clar & Eficient",
  /** Main section heading. */
  title: "Cum funcționează serviciul",
  /** Supporting paragraph under the heading. */
  subtitle:
    "Trei pași simpli pentru redobândirea confortului și siguranței igienice în spațiul tău.",
} as const;
