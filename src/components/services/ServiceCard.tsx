import { useDisclosure } from "../../hooks/useDisclosure";
import type { ServiceItem } from "./servicesContent";
import { CheckCircleIcon, ChevronDownIcon } from "./servicesIcons";

export interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { isOpen, toggle } = useDisclosure(false);
  const { id, title, description, features, Icon, accentClass } = service;

  const panelId = `service-${id}-features`;
  const toggleId = `service-${id}-toggle`;

  return (
    <article className="relative flex flex-col overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8">
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 ${accentClass}`}
      />

      {/* Icon tile */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low text-secondary">
        <Icon className="h-7 w-7" />
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-manrope text-headline-md font-semibold text-on-surface">
          {title}
        </h3>
        <button
          id={toggleId}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={`Detalii ${title}`}
          className="-mr-1 -mt-1 inline-flex shrink-0 items-center justify-center rounded-full p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest md:hidden"
        >
          <ChevronDownIcon
            className={`h-5 w-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <p className="mt-3 font-jakarta text-body-md leading-relaxed text-on-surface-variant">
        {description}
      </p>

      <ul
        id={panelId}
        aria-labelledby={toggleId}
        className={`mt-5 flex-col gap-3 ${isOpen ? "flex" : "hidden"} md:flex`}
      >
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 font-jakarta text-label-lg font-semibold text-on-surface"
          >
            <CheckCircleIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-secondary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
