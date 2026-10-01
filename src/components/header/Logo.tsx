export function Logo() {
  return (
    <a
      href="#"
      aria-label="DeratPro — pagina principală"
      className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-container shadow-sm">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
          focusable="false"
          className="h-7 w-7"
        >
          <path
            d="M32 14L46 22V36C46 45 39.5 50 32 53C24.5 50 18 45 18 36V22L32 14Z"
            stroke="#00D2A0"
            strokeWidth={2.5}
            strokeLinejoin="round"
            fill="#0B192C"
          />
          <path
            d="M26 33.5L30.5 38L38.5 29"
            stroke="#00D2A0"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="22" r="2.5" fill="#38BDF8" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-manrope text-headline-md font-extrabold tracking-tight text-on-surface">
          Derat<span className="text-secondary">Pro</span>
        </span>
        <span className="mt-0.5 font-jakarta text-[10px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
          Bioprotecție &amp; Siguranță
        </span>
      </span>
    </a>
  );
}
