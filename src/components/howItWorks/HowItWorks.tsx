import { StepCard } from "./StepCard";
import { howItWorksHeader, steps } from "./howItWorksContent";

const HOW_IT_WORKS_HEADING_ID = "how-it-works-heading";

/**
 * "Cum funcționează serviciul" (How It Works) section for the DeratPro landing
 * page.
 *
 * Presents the three-step intervention protocol as a card-less connected
 * timeline of {@link StepCard}s. The header (eyebrow, heading, supporting
 * paragraph) and the steps all draw their copy from `howItWorksContent.ts`, so
 * the wording is identical across breakpoints — only the layout is responsive:
 * the steps stack into a vertical timeline on mobile and flow into a
 * three-column horizontal timeline from `md` up. A decorative horizontal
 * connective line runs behind the number badges on desktop only (there is no
 * line on mobile, where narrow columns could let text overlap it); it is
 * `aria-hidden` and sits below the badges, which punch through it via their
 * ring so it never overlaps their content.
 *
 * The `#cum-functioneaza` anchor matches the header navigation link.
 */
export function HowItWorks() {
  return (
    <section
      id="cum-functioneaza"
      aria-labelledby={HOW_IT_WORKS_HEADING_ID}
      className="bg-surface-bright py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Section header — centered, matching the WhyUs section. */}
        <div className="mb-12 max-w-xl md:mx-auto md:mb-16 md:text-center">
          <span className="mb-2 block font-jakarta text-label-technical uppercase tracking-widest text-secondary">
            {howItWorksHeader.eyebrow}
          </span>
          <h2
            id={HOW_IT_WORKS_HEADING_ID}
            className="font-manrope text-headline-xl-mobile font-bold tracking-tight text-on-surface md:text-headline-xl"
          >
            {howItWorksHeader.title}
          </h2>
          <p className="mt-4 font-jakarta text-body-md leading-relaxed text-on-surface-variant">
            {howItWorksHeader.subtitle}
          </p>
        </div>

        {/* Timeline: vertical stack on mobile, three-column row from `md` up.
            The connective line is decorative and shown only on desktop, layered
            behind the badges, which punch through it via their
            `border-surface-bright` ring. On mobile there is no line. */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Horizontal connective line (desktop only), behind the badge row. */}
          <div
            aria-hidden="true"
            className="absolute left-24 right-24 top-7 hidden h-0.5 bg-outline-variant/50 md:block"
          />

          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
