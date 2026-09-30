/**
 * Generates a client-side intervention reference code for the contact form's
 * success state, in the format `#DP-2025-XXXX` where `XXXX` is a zero-padded
 * 4-digit number.
 *
 * There is no backend, so this is purely cosmetic — it gives the user a
 * plausible-looking confirmation reference mirroring the design mockups.
 *
 * @param random - A source of randomness in the range `[0, 1)`. Defaults to
 *   `Math.random`; injectable so tests can produce deterministic output.
 * @returns A reference string matching `^#DP-2025-\d{4}$`.
 */
export function generateReferenceCode(random: () => number = Math.random): string {
  const digits = Math.floor(random() * 10000);
  const padded = digits.toString().padStart(4, "0");
  return `#DP-2025-${padded}`;
}
