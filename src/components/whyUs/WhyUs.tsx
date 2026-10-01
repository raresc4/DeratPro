import { FeatureCard } from "./FeatureCard";
import { advantages, whyUsHeader } from "./whyUsContent";

const WHYUS_HEADING_ID = "why-us-heading";

export function WhyUs() {
  return (
    <section
      id="de-ce-noi"
      aria-labelledby={WHYUS_HEADING_ID}
      className="border-y border-outline-variant/30 bg-surface-container-low py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <FeatureCard key={advantage.id} advantage={advantage} />
          ))}
        </div>
      </div>
    </section>
  );
}
