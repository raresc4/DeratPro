import type { AnimationAction } from "three";

/** The high-poly model's run clip name. */
export const RUN_CLIP = "rig|run cycle";

/**
 * Resolve the run animation action from a clip map.
 *
 * Prefers the known high-poly clip name, then falls back to the first clip
 * whose name contains "run" so the low-poly model still animates even if its
 * clips are named differently.
 */
export function resolveRunAction(
  actions: Record<string, AnimationAction | null>,
): AnimationAction | null {
  const exact = actions[RUN_CLIP];
  if (exact) return exact;

  const runKey = Object.keys(actions).find((name) => /run/i.test(name));
  return runKey ? actions[runKey] : null;
}
