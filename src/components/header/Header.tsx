import { useEffect, useRef } from "react";
import { useDisclosure } from "../../hooks/useDisclosure";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";
import { ctaLink, navLinks, phone } from "./navLinks";

const MOBILE_MENU_ID = "mobile-menu";

export function Header() {
  const menu = useDisclosure(false);
  const { isOpen, close, toggle } = menu;

  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    firstMenuItemRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  const navLinkClass =
    "font-jakarta text-label-lg font-medium text-on-surface-variant transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest rounded-sm px-1 py-1";

  const ctaClass =
    "inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-2.5 font-jakarta text-label-lg font-semibold text-on-secondary shadow-sm transition-all hover:bg-secondary/90 hover:shadow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface-container-lowest/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
        <Logo />

        <nav
          aria-label="Navigație principală"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={phone.href}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-jakarta text-label-lg font-semibold text-on-surface transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest"
          >
            <PhoneIcon className="h-5 w-5 text-secondary" />
            <span>{phone.display}</span>
          </a>
          <a href={ctaLink.href} className={ctaClass}>
            {ctaLink.label}
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={toggle}
          aria-label={isOpen ? "Închide meniu" : "Deschide meniu"}
          aria-expanded={isOpen}
          aria-controls={MOBILE_MENU_ID}
          className="inline-flex items-center justify-center rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest md:hidden"
        >
          {isOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id={MOBILE_MENU_ID}
          className="border-t border-outline-variant/30 bg-surface-container-lowest px-4 pb-4 pt-2 shadow-md md:hidden"
        >
          <nav aria-label="Navigație principală" className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                ref={index === 0 ? firstMenuItemRef : undefined}
                onClick={close}
                className="rounded-lg px-3 py-2.5 font-jakarta text-label-lg font-medium text-on-surface transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-3 flex flex-col gap-2 border-t border-outline-variant/30 pt-3">
            <a
              href={ctaLink.href}
              onClick={close}
              className={ctaClass}
            >
              {ctaLink.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
