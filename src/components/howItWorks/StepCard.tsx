import type { ProcessStep } from "./howItWorksContent";

export interface StepCardProps {
  /** The process step this card renders. */
  step: ProcessStep;
}

/**
 * A single process step rendered as a card-less timeline item: a number badge
 * that sits on the section's connective line, with the title and a narrow
 * description centered below.
 *
 * Purely presentational and props-driven (no local state). The item is
 * center-aligned at every breakpoint; only the surrounding timeline direction
 * is responsive (vertical on mobile, horizontal from `md` up), never the item
 * itself or its copy.
 *
 * The two-digit order label is rendered as real text inside the badge, so the
 * step order is conveyed textually rather than by color alone. The central step
 * (`variant: "primary"`) gets the emerald fill; the others use the dark
 * container fill with a light mint digit — both pairs meet WCAG AA contrast.
 * The badge's `border-surface-bright` ring matches the section background so it
 * visually breaks the connective line running behind it.
 */
export function StepCard({ step }: StepCardProps) {
  const { number, title, description, variant } = step;

  const badgeClass =
    variant === "primary"
      ? "bg-secondary text-on-secondary"
      : "bg-primary-container text-secondary-fixed";

  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      {/* Number badge — the digits are visible text so order is announced by
          assistive technology; the ring matches the section background so the
          badge punches through the connective line behind it. */}
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-surface-bright font-manrope text-headline-sm font-bold shadow-md ${badgeClass}`}
      >
        {number}
      </div>

      <h3 className="mb-2 font-manrope text-headline-md font-semibold text-on-surface">
        {title}
      </h3>
      <p className="max-w-xs font-jakarta text-body-md leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
