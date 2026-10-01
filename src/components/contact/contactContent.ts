import type { SelectOption } from "../../models/contact";
import { phone } from "../header/navLinks";

export const contactHeader = {
  eyebrow: "Simulator Formular",
  title: "Cere o ofertă personalizată",
  subtitle: "Răspundem în maximum 15 minute cu o cotație exactă.",
} as const;

export const contactFields = {
  name: {
    label: "Nume complet sau Companie",
    placeholder: "Ex: Popescu Andrei / S.C. Alfa SRL",
  },
  phone: {
    label: "Număr de telefon",
    placeholder: "07xxxxxxxx",
  },
  service: {
    label: "Serviciu solicitat",
    placeholder: "Selectează serviciul dorit",
  },
  surface: {
    label: "Suprafață aproximativă",
    placeholder: "Selectează suprafața",
  },
  message: {
    label: "Detalii despre locație și problemă",
    placeholder:
      "Menționează tipul de spațiu, dacă s-a mai intervenit anterior și altceva ce vrei să ne transmiți...",
  },
} as const;

export const contactConsentLabel =
  "Sunt de acord cu prelucrarea datelor în scopul transmiterii ofertei tehnice.";

export const contactButtons = {
  submit: "Trimite solicitarea",
  retry: "Trimite o altă solicitare",
} as const;

export const contactErrorBanner =
  "Te rugăm să corectezi câmpurile evidențiate mai jos înainte de a trimite solicitarea.";

export const contactSuccess = {
  heading: "Solicitarea a fost înregistrată!",
  bodyLead: "Mulțumim pentru încredere. Un specialist DeratPro te va contacta în maximum ",
  bodyEmphasis: "15 minute",
  bodyTail: " pentru confirmarea detaliilor și trimiterea ofertei ferme.",
  referenceLabel: "Număr de referință intervenție:",
} as const;

export const serviceOptions: readonly SelectOption[] = [
  { value: "pachet_complet", label: "Pachet Complet DDD (Recomandat)" },
  { value: "deratizare", label: "Deratizare (Șoareci, Șobolani)" },
  { value: "dezinsectie", label: "Dezinsecție (Gândaci, Ploșnițe, Căpușe)" },
  { value: "dezinfectie", label: "Dezinfecție Nebulizare Virucidă" },
] as const;

export const surfaceOptions: readonly SelectOption[] = [
  { value: "sub_60", label: "Sub 60 m² (Apartament / Spațiu mic)" },
  { value: "60_200", label: "60 - 200 m² (Casă / Sediu firmă)" },
  { value: "200_500", label: "200 - 500 m² (Depozit / Restaurant)" },
  { value: "peste_500", label: "Peste 500 m² (Spațiu industrial)" },
] as const;

export { phone };
