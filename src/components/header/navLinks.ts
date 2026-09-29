/** A single navigation entry rendered in both the desktop nav and mobile menu. */
export interface NavLink {
  label: string;
  href: string;
}

/**
 * Primary navigation links. This is the single source of truth shared by the
 * desktop `<nav>` and the mobile disclosure menu, guaranteeing identical copy
 * across breakpoints (only styling differs responsively).
 */
export const navLinks: readonly NavLink[] = [
  { label: "Servicii", href: "#servicii" },
  { label: "De ce noi", href: "#de-ce-noi" },
  { label: "Cum funcționează", href: "#cum-functioneaza" },
  { label: "Contact", href: "#contact" },
] as const;

/** Primary call-to-action, reused by both layouts. */
export const ctaLink: NavLink = {
  label: "Cere ofertă",
  href: "#contact",
} as const;

/** Contact phone, reused by both layouts. */
export const phone = {
  /** Human-readable number shown in the UI. */
  display: "0722 000 000",
  /** `tel:` target (digits only). */
  href: "tel:0722000000",
} as const;
