import type { ComponentType, SVGProps } from "react";
import { AirIcon, SanitizerIcon, ShieldIcon } from "./servicesIcons";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: readonly string[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  accentClass: string;
}

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

export const servicesHeader = {
  eyebrow: "Servicii Integrate DDD",
  title: "Tratamente Profesionale de Biosecuritate",
  subtitle:
    "Utilizăm echipamente de precizie și protocoale ecologice conforme standardelor EN 16636 pentru spații casnice, birouri și unități de producție alimentară.",
} as const;
