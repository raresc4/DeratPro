import { StepCard } from "./StepCard";
import { howItWorksHeader, steps } from "./howItWorksContent";

const HOW_IT_WORKS_HEADING_ID = "how-it-works-heading";

export function HowItWorks() {
  return (
    <section
      id="cum-functioneaza"
      aria-labelledby={HOW_IT_WORKS_HEADING_ID}
      className="bg-surface-bright py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
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

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
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
