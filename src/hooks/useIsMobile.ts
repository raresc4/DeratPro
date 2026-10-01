import { useState } from "react";

export const MOBILE_MEDIA_QUERY = "(max-width: 1023.98px)";

/**
 * Reports whether the viewport is "mobile" (narrower than Tailwind's `lg`).
 *
 * The value is read a single time on mount via a lazy `useState` initializer —
 * there is intentionally no resize listener, so rotating a device mid-session
 * will not flip the result until the component remounts. During SSR / first
 * paint (no `window`) it defaults to `false` (desktop).
 */
export function useIsMobile(): boolean {
  const [isMobile] = useState<boolean>(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }
    return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
  });

  return isMobile;
}
