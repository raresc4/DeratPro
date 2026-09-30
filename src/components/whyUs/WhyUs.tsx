import { FeatureCard } from "./FeatureCard";
import { advantages, whyUsHeader } from "./whyUsContent";

const WHYUS_HEADING_ID = "why-us-heading";

/**
 * "De ce noi" (Why Us) section for the DeratPro landing page.
 *
 * Presents the four core reasons to choose DeratPro as {@link FeatureCard}s.
 * The header (eyebrow, heading, supporting paragraph) and the cards all draw
 * their copy from `whyUsContent.ts`, so the wording is identical across
 * breakpoints — only the layout is responsive: the section header is centered
 * at all breakpoints and the grid grows from a single column to two and then
 * four columns.
 *
 * The `#de-ce-noi` anchor matches the header navigation link.
 */
export function WhyUs() {
  return (
    <section
      id="de-ce-noi"
      aria-labelledby={WHYUS_HEADING_ID}
      className="border-y border-outline-variant/30 bg-surface-container-low py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Section header — centered at all breakpoints, matching the reference. */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-2 block font-jakarta text-label-technical uppercase tracking-widest text-secondary">
            {whyUsHeader.eyebrow}
          </span>
          <h2
            id={WHYUS_HEADING_ID}
            className="font-manrope text-headline-xl-mobile font-bold tracking-tight text-on-surface md:text-headline-xl"
          >
            {whyUsHeader.title}
          </h2>
          <p className="mt-4 font-jakarta text-body-md leading-relaxed text-on-surface-variant">
            {whyUsHeader.subtitle}
          </p>
        </div>

        {/* Cards: single column on mobile, two then four columns as space allows. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <FeatureCard key={advantage.id} advantage={advantage} />
          ))}
        </div>
      </div>
    </section>
  );
}
