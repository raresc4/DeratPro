export interface ContactFormValues {
  name: string;
  phone: string;
  service: string;
  surface: string;
  message: string;
  consent: boolean;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export type ContactFormStatus = "editing" | "success";

export interface SelectOption {
  value: string;
  label: string;
}
