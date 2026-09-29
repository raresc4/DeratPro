import type { SVGProps } from "react";

/**
 * Decorative inline icons for the hero.
 *
 * Like the header icons, these default to `aria-hidden` / `focusable={false}`
 * so assistive technology ignores them; the accessible name is supplied by the
 * surrounding interactive element. Any SVG prop can be overridden by callers.
 */

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowRightIcon(props: IconProps) {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
