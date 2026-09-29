import { ServiceCard } from "./ServiceCard";
import { services, servicesHeader } from "./servicesContent";

const SERVICES_HEADING_ID = "services-heading";

/**
 * Services section for the DeratPro landing page.
 *
 * A clean, light section presenting the three core DDD offerings as
 * {@link ServiceCard}s. The header (eyebrow, heading, supporting paragraph) and
 * the cards all draw their copy from `servicesContent.ts`, so the wording is
 * identical across breakpoints — only the layout is responsive (a single
 * column on mobile, a three-column grid from `md` up).
 *
 * The `#servicii` anchor matches the header navigation link.
 */
export function Services() {
  return (
    <section
      id="servicii"
      aria-labelledby={SERVICES_HEADING_ID}
      className="bg-surface-bright py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Section header — eyebrow + heading on the left, supporting copy on
            the right from the `md` breakpoint up. */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block font-jakarta text-label-technical uppercase tracking-widest text-secondary">
              {servicesHeader.eyebrow}
            </span>
            <h2
              id={SERVICES_HEADING_ID}
              className="font-manrope text-headline-xl-mobile font-bold tracking-tight text-on-surface md:text-headline-xl"
            >
              {servicesHeader.title}
            </h2>
          </div>
          <p className="max-w-md font-jakarta text-body-md leading-relaxed text-on-surface-variant">
            {servicesHeader.subtitle}
          </p>
        </div>

        {/* Cards: stacked on mobile, three columns from `md` up. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
