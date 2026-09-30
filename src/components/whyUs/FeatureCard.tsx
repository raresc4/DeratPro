import type { Advantage } from "./whyUsContent";

export interface FeatureCardProps {
  /** The advantage this card renders. */
  advantage: Advantage;
}

/**
 * A single advantage card: icon tile, title and a supporting description.
 *
 * Purely presentational and props-driven (no local state). The copy and layout
 * are identical across breakpoints, matching the reference design: the icon
 * sits above the text in a column (`flex flex-col`). The icon rests on a
 * neutral tile and takes its accent color from `advantage.iconColorClass`, so
 * each card carries a slightly different accent as in the reference.
 */
export function FeatureCard({ advantage }: FeatureCardProps) {
  const { title, description, Icon, iconColorClass } = advantage;

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-xs">
      {/* Icon tile — decorative; the accessible name comes from the title. */}
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container ${iconColorClass}`}
      >
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <h3 className="mb-1 font-manrope text-headline-sm font-semibold text-on-surface">
          {title}
        </h3>
        <p className="font-jakarta text-body-md leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </div>
    </article>
  );
}
