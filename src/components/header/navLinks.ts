export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: readonly NavLink[] = [
  { label: "Servicii", href: "#servicii" },
  { label: "De ce noi", href: "#de-ce-noi" },
  { label: "Cum funcționează", href: "#cum-functioneaza" },
  { label: "Contact", href: "#contact" },
] as const;

export const ctaLink: NavLink = {
  label: "Cere ofertă",
  href: "#contact",
} as const;

export const phone = {
  display: "0722 000 000",
  href: "tel:0722000000",
} as const;
