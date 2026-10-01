import { useCallback, useState } from "react";

export interface UseDisclosureReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

/**
 * Minimal, typed open/close state hook.
 *
 * @param initialOpen - initial open state (defaults to `false`).
 */
export function useDisclosure(initialOpen = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
}
