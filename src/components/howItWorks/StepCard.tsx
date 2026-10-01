import type { ProcessStep } from "./howItWorksContent";

export interface StepCardProps {
  step: ProcessStep;
}

export function StepCard({ step }: StepCardProps) {
  const { number, title, description, variant } = step;

  const badgeClass =
    variant === "primary"
      ? "bg-secondary text-on-secondary"
      : "bg-primary-container text-secondary-fixed";

  return (
    <div className="relative z-10 flex flex-col items-center text-center">
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
