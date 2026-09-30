import { ScheduleIcon } from "./icons";
import {
  authorizations,
  footerBrand,
  footerColumnTitles,
  footerContact,
  footerCopyright,
  legalLinks,
  serviceLinks,
} from "./footerContent";

const FOOTER_HEADING_ID = "footer-heading";

/**
 * Site footer for DeratPro.
 *
 * A dark biosafety-themed `contentinfo` landmark with four columns — brand
 * blurb, service links, authorizations and quick contact — over a bottom bar
 * carrying legal links and the copyright line. All copy is single-sourced from
 * `footerContent.ts`, so the wording is identical across breakpoints; only the
 * layout is responsive (the columns stack on mobile and spread into a 4-up grid
 * from the `md` breakpoint up).
 *
 * Service and legal links are placeholders (`#`) for now; the phone and email
 * are the meaningful contact points and use real `tel:` / `mailto:` targets.
 * Decorative icons are `aria-hidden`, and every interactive element carries a
 * visible focus ring tuned for the dark surface.
 */
export function Footer() {
  // Shared focus-visible ring, offset against the dark footer surface.
  const focusRing =
    "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-container";

  const linkClass = `font-jakarta text-body-md text-primary-fixed-dim transition-colors hover:text-secondary-fixed ${focusRing}`;

  const columnTitleClass =
    "font-jakarta text-label-technical uppercase tracking-wider text-secondary-fixed";

  return (
    <footer
      aria-labelledby={FOOTER_HEADING_ID}
      className="border-t border-outline-variant/20 bg-primary-container text-inverse-on-surface"
    >
      <h2 id={FOOTER_HEADING_ID} className="sr-only">
        Informații DeratPro
      </h2>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 md:px-8 md:py-16">
        {/* Top region: brand + link/info columns. Stacks on mobile, 4-up grid on desktop. */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <span className="font-manrope text-headline-md font-bold tracking-tight text-inverse-on-surface">
              Derat<span className="text-secondary-fixed">Pro</span>
            </span>
            <p className="font-jakarta text-body-md leading-relaxed text-primary-fixed-dim">
              {footerBrand.blurb}
            </p>
            <div className="flex items-center gap-2 font-jakarta text-label-technical uppercase tracking-wider text-secondary-fixed">
              <ScheduleIcon className="h-4 w-4" />
              <span>{footerBrand.availability}</span>
            </div>
          </div>

          {/* Servicii DDD */}
          <nav aria-label={footerColumnTitles.services} className="flex flex-col gap-3">
            <span className={columnTitleClass}>{footerColumnTitles.services}</span>
            {serviceLinks.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Autorizații & Norme — informational, non-interactive text */}
          <div className="flex flex-col gap-3">
            <span className={columnTitleClass}>
              {footerColumnTitles.authorizations}
            </span>
            {authorizations.map((item) => (
              <span
                key={item}
                className="font-jakarta text-body-md text-primary-fixed-dim"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Contact Rapid */}
          <div className="flex flex-col gap-3">
            <span className={columnTitleClass}>{footerColumnTitles.contact}</span>
            <a
              href={footerContact.phone.href}
              className={`font-manrope text-headline-sm font-bold text-secondary-fixed transition-colors hover:text-secondary-fixed/80 ${focusRing}`}
            >
              {footerContact.phone.display}
            </a>
            <a href={footerContact.email.href} className={linkClass}>
              {footerContact.email.display}
            </a>
            <span className="font-jakarta text-body-md text-primary-fixed-dim">
              {footerContact.coverage}
            </span>
          </div>
        </div>

        {/* Bottom bar: legal links + copyright. */}
        <div className="flex flex-col flex-wrap items-start gap-4 border-t border-outline-variant/20 pt-6 md:flex-row md:items-center md:justify-between">
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="font-jakarta text-label-technical text-primary-fixed-dim/80">
            {footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
