import { PhoneIcon } from "../header/icons";
import { ArrowRightIcon } from "./icons";
import {
  ctaLink,
  heroContent,
  heroPrimaryCtaLabel,
  phone,
} from "./heroContent";
import Animation from "../animation/Animation";

const HERO_HEADING_ID = "hero-heading";

/**
 * Landing-page hero for DeratPro.
 *
 * A dark biosafety-themed section: a live-status badge, a two-tone headline, a
 * desktop-only subtitle and two CTAs, laid out beside a reserved slot for a
 * future Three.js animation. Copy is identical across breakpoints — only the
 * layout and type scale change responsively.
 *
 * The decorative glow/grid layers are `aria-hidden`, and the animation slot is
 * excluded from the accessibility tree until the canvas is added later.
 */
export function Hero() {
  const primaryCtaClass =
    "inline-flex items-center justify-center gap-2.5 rounded-lg bg-secondary px-8 py-4 font-jakarta text-label-lg font-semibold text-on-secondary shadow-lg transition-all hover:bg-secondary/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-container";

  const secondaryCtaClass =
    "inline-flex items-center justify-center gap-2 rounded-lg border border-inverse-on-surface/20 bg-inverse-on-surface/10 px-6 py-4 font-jakarta text-label-lg font-semibold text-inverse-on-surface backdrop-blur-md transition-all hover:border-inverse-on-surface/40 hover:bg-inverse-on-surface/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-container";

  return (
    <section
      aria-labelledby={HERO_HEADING_ID}
      className="relative flex min-h-[calc(100svh-var(--header-h))] items-center overflow-hidden bg-primary-container text-inverse-on-surface"
    >
      {/* Decorative ambient background: two blurred glows + a faint dot grid. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[15%] h-[600px] w-[600px] rounded-full bg-secondary/20 blur-[128px]" />
        <div className="absolute -bottom-24 left-0 h-[500px] w-[500px] rounded-full bg-tertiary-fixed-dim/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 grid-rows-[auto_auto_auto] gap-5 px-4 py-10 sm:gap-6 sm:py-14 lg:min-h-[inherit] lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:items-center lg:gap-x-12 lg:gap-y-8 lg:px-8 lg:py-24">
        {/* Text block: badge, headline and desktop subtitle.
            Stacked layouts show it first; on desktop it sits at the top of the
            left column. */}
        <div className="order-1 flex flex-col items-start gap-4 sm:gap-6 lg:col-start-1 lg:row-start-1">
          {/* Live-status trust badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-inverse-on-surface/20 bg-inverse-on-surface/10 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-fixed opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-fixed" />
            </span>
            <span className="font-jakarta text-label-technical uppercase tracking-wide text-secondary-fixed">
              {heroContent.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            id={HERO_HEADING_ID}
            className="font-manrope text-headline-xl-mobile font-extrabold tracking-tight text-inverse-on-surface sm:text-display-hero-mobile lg:text-display-hero"
          >
            {heroContent.headlineLead}
            {/* Accent joins only on the desktop two-column layout, where there
                is room; on smaller stacked screens the lead alone is enough. */}
            <span className="hidden text-secondary-fixed lg:inline">
              {" "}
              {heroContent.headlineAccent}
            </span>
          </h1>

          {/* Subtitle — shown from the desktop layout up. */}
          <p className="hidden max-w-xl font-jakarta text-body-lg leading-relaxed text-primary-fixed-dim lg:block lg:text-body-xl">
            {heroContent.subtitle}
          </p>
        </div>

        {/* Reserved slot for the future Three.js animation. Hidden from the
            accessibility tree and non-interactive until the canvas is added.
            Mobile: order 2, above the CTAs. Desktop: right column, spanning
            both rows so it sits beside the text and CTAs. */}
        <div
          id="hero-animation-slot"
          aria-hidden="true"
          className="relative order-2 flex h-56 w-full items-center justify-center overflow-hidden shadow-inner backdrop-blur-sm sm:h-64 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full lg:min-h-[420px]"
        >
          {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent" />
          <span className="relative font-jakarta text-label-technical uppercase tracking-wider text-primary-fixed-dim/70">
            Spațiu rezervat animației 3D
          </span> */}
          <Animation/>
        </div>

        {/* CTA cluster. Mobile: order 3, below the animation slot. Desktop:
            bottom of the left column, under the text block. */}
        <div className="order-3 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 lg:col-start-1 lg:row-start-2 lg:w-auto">
          <a href={ctaLink.href} className={primaryCtaClass}>
            <span>{heroPrimaryCtaLabel}</span>
            <ArrowRightIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={phone.href} className={secondaryCtaClass}>
            <PhoneIcon className="h-5 w-5 text-secondary-fixed" />
            <span>Sună acum: {phone.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
