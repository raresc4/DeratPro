import type { ComponentType, SVGProps } from "react";
import { BadgeIcon, ClockIcon, ContractIcon, VerifiedIcon } from "./whyUsIcons";

export interface Advantage {
  id: string;
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconColorClass:
    | "text-secondary"
    | "text-on-secondary-container"
    | "text-on-tertiary-container";
}

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

export const whyUsHeader = {
  eyebrow: "Standarde Medicale de Igienă",
  title: "De ce aleg companiile și proprietarii DeratPro?",
  subtitle:
    "Nu facem compromisuri când vine vorba de sănătate și siguranță perimetrală. Fiecare procedură este auditată și certificată.",
} as const;
