import type { SVGProps } from "react";

/**
 * Decorative inline icons for the "De ce noi" (Why Us) section.
 *
 * Following the header/hero/services convention, these default to
 * `aria-hidden` / `focusable={false}` so assistive technology ignores them;
 * the accessible name comes from the surrounding heading. Any SVG prop can be
 * overridden by callers (e.g. `className` for sizing/color).
 */

type IconProps = SVGProps<SVGSVGElement>;

/** Intervenție rapidă 24/7 — a clock, standing in for fast response time. */
export function ClockIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

/** Substanțe avizate & ecologice — a verified/approved badge. */
export function VerifiedIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 2.5 14.6 5l3.6-.4 1.2 3.4L22 10.5l-2.6 2.5.4 3.6-3.4 1.2L14 21.5 12 19l-2 2.5-2.4-1.7-3.4-1.2.4-3.6L2 10.5l2.6-2.5L3.4 4.6 7 5z" />
      <polyline points="8.5 12 11 14.5 15.5 9.5" />
    </svg>
  );
}

/** Tehnicieni autorizați — an ID/credential badge. */
export function BadgeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="9" r="2.5" />
      <path d="M8 16.5c0-2 1.8-3 4-3s4 1 4 3" />
    </svg>
  );
}

/** Garanție scrisă — a signed contract / document. */
export function ContractIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <polyline points="14 3 14 8 19 8" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" />
      <path d="M8.5 16c1 0 1.3-1.3 2-1.3s1 1.3 2 1.3 1.3-1.3 2-1.3" />
    </svg>
  );
}
