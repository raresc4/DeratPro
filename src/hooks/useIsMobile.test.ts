import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MOBILE_MEDIA_QUERY, useIsMobile } from "./useIsMobile";

/** Install a `window.matchMedia` stub that reports the given `matches` value. */
function stubMatchMedia(matches: boolean) {
  const matchMedia = vi.fn((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
  vi.stubGlobal("matchMedia", matchMedia);
  return matchMedia;
}

describe("useIsMobile", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns true when the mobile media query matches", () => {
    const matchMedia = stubMatchMedia(true);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
    expect(matchMedia).toHaveBeenCalledWith(MOBILE_MEDIA_QUERY);
  });

  it("returns false when the mobile media query does not match", () => {
    stubMatchMedia(false);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });
});
