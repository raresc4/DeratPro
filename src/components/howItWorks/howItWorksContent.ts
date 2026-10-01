export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  variant: "default" | "primary";
}

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

export const howItWorksHeader = {
  eyebrow: "Protocol Clar & Eficient",
  title: "Cum funcționează serviciul",
  subtitle:
    "Trei pași simpli pentru redobândirea confortului și siguranței igienice în spațiul tău.",
} as const;
