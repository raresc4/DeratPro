import type { SVGProps } from "react";

/**
 * Decorative inline icons for the services section.
 *
 * Following the header/hero convention, these default to `aria-hidden` /
 * `focusable={false}` so assistive technology ignores them; the accessible
 * name comes from the surrounding heading or button. Any SVG prop can be
 * overridden by callers (e.g. `className` for sizing/color).
 */

type IconProps = SVGProps<SVGSVGElement>;

/** Deratizare — a shield, echoing the design's protection motif. */
export function ShieldIcon(props: IconProps) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/** Dezinsecție — airflow lines, standing in for cold-fog / ULV nebulization. */
export function AirIcon(props: IconProps) {
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
      <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M3 12h15a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M3 16h9a2 2 0 1 1-2 2" />
    </svg>
  );
}

/** Dezinfecție — a spray/sanitizer bottle for surface disinfection. */
export function SanitizerIcon(props: IconProps) {
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
      <path d="M9 4h4v3H9z" />
      <path d="M9 7h5a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9a3 3 0 0 1 3-3z" />
      <line x1="9.5" y1="12" x2="13.5" y2="12" />
      <path d="M16 3h1.5M18.5 3H20M17.25 3v-1.5M17.25 4v1.5" />
    </svg>
  );
}

/** Affirmative check inside a circle, used for each feature list item. */
export function CheckCircleIcon(props: IconProps) {
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
      <polyline points="8.5 12.5 11 15 15.5 9.5" />
    </svg>
  );
}

/** Chevron for the mobile collapse toggle; rotate via a `className`. */
export function ChevronDownIcon(props: IconProps) {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
