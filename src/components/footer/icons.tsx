import type { SVGProps } from "react";

/**
 * Decorative inline icons for the footer.
 *
 * Following the header/hero/whyUs convention, these default to `aria-hidden` /
 * `focusable={false}` so assistive technology ignores them; the accessible
 * meaning comes from the adjacent text. Any SVG prop can be overridden by
 * callers (e.g. `className` for sizing/color).
 */

type IconProps = SVGProps<SVGSVGElement>;

/** Program 24/7 — a clock, standing in for round-the-clock availability. */
export function ScheduleIcon(props: IconProps) {
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
