import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

// --- Mocks --------------------------------------------------------------
// Stub the r3f / drei hooks and Canvas so the component tree renders under
// jsdom without a real WebGL context. useFrame becomes a no-op; useGLTF and
// useAnimations return controllable fakes.

const { useGLTFMock, useAnimationsMock, canvasCameraSpy } = vi.hoisted(() => ({
  useGLTFMock: vi.fn(),
  useAnimationsMock: vi.fn(),
  canvasCameraSpy: vi.fn(),
}));

vi.mock("@react-three/fiber", () => ({
  // Render children directly; a real <Canvas> needs WebGL which jsdom lacks.
  // Record the camera prop so tests can assert responsive framing.
  Canvas: ({
    children,
    camera,
  }: {
    children: React.ReactNode;
    camera?: unknown;
  }) => {
    canvasCameraSpy(camera);
    return <div>{children}</div>;
  },
  useFrame: () => {},
}));

vi.mock("@react-three/drei", () => {
  // useGLTF is a function with a static `preload` method; provide both.
  const useGLTF = Object.assign((url: string) => useGLTFMock(url), {
    preload: vi.fn(),
  });
  return {
    useGLTF,
    useAnimations: (animations: unknown, ref: unknown) =>
      useAnimationsMock(animations, ref),
    OrbitControls: () => null,
  };
});

// Import after mocks are registered.
import Animation, { RunningMouse } from "./Animation";
import { resolveRunAction } from "./runAction";
import { useIsMobile } from "../../hooks/useIsMobile";

vi.mock("../../hooks/useIsMobile", () => ({
  useIsMobile: vi.fn(),
}));

/** Build a fake AnimationAction whose chainable methods are spies. */
function fakeAction() {
  const action = {
    reset: vi.fn(() => action),
    fadeIn: vi.fn(() => action),
    fadeOut: vi.fn(() => action),
    play: vi.fn(() => action),
  };
  return action;
}

afterEach(() => {
  vi.clearAllMocks();
});

describe("resolveRunAction", () => {
  it("prefers the exact 'rig|run cycle' clip", () => {
    const exact = fakeAction();
    const other = fakeAction();
    const resolved = resolveRunAction({
      "rig|run cycle": exact as never,
      "rig|idle": other as never,
    });
    expect(resolved).toBe(exact);
  });

  it("falls back to any clip whose name contains 'run'", () => {
    const run = fakeAction();
    const resolved = resolveRunAction({
      "Armature|run": run as never,
      "Armature|idle": fakeAction() as never,
    });
    expect(resolved).toBe(run);
  });

  it("returns null when no run clip exists", () => {
    expect(resolveRunAction({ idle: fakeAction() as never })).toBeNull();
  });
});

describe("RunningMouse", () => {
  it("plays the exact run clip on mount", () => {
    const run = fakeAction();
    useGLTFMock.mockReturnValue({ scene: {}, animations: [] });
    useAnimationsMock.mockReturnValue({ actions: { "rig|run cycle": run } });

    render(<RunningMouse modelUrl="/model.glb" />);

    expect(run.reset).toHaveBeenCalled();
    expect(run.play).toHaveBeenCalled();
    expect(useGLTFMock).toHaveBeenCalledWith("/model.glb");
  });

  it("plays a differently-named run clip via the fallback", () => {
    const run = fakeAction();
    useGLTFMock.mockReturnValue({ scene: {}, animations: [] });
    useAnimationsMock.mockReturnValue({ actions: { "Armature|run": run } });

    render(<RunningMouse modelUrl="/low.glb" />);

    expect(run.play).toHaveBeenCalled();
  });
});

describe("Animation model + camera selection", () => {
  it("uses the low-poly model on mobile", () => {
    vi.mocked(useIsMobile).mockReturnValue(true);
    useGLTFMock.mockReturnValue({ scene: {}, animations: [] });
    useAnimationsMock.mockReturnValue({ actions: {} });

    render(<Animation />);

    const requestedUrls = useGLTFMock.mock.calls.map((c) => c[0] as string);
    expect(requestedUrls.some((u) => u.includes("mouse_low"))).toBe(true);
    expect(requestedUrls.some((u) => u.includes("mouse_high"))).toBe(false);

    // Camera is pulled back on mobile (larger Z than the desktop default of 8).
    const camera = canvasCameraSpy.mock.calls.at(-1)?.[0] as {
      position: number[];
      fov: number;
    };
    expect(camera.position[2]).toBeGreaterThan(8);
    expect(camera.fov).toBeGreaterThan(45);
  });

  it("uses the high-poly model on desktop", () => {
    vi.mocked(useIsMobile).mockReturnValue(false);
    useGLTFMock.mockReturnValue({ scene: {}, animations: [] });
    useAnimationsMock.mockReturnValue({ actions: {} });

    render(<Animation />);

    const requestedUrls = useGLTFMock.mock.calls.map((c) => c[0] as string);
    expect(requestedUrls.some((u) => u.includes("mouse_high"))).toBe(true);
    expect(requestedUrls.some((u) => u.includes("mouse_low"))).toBe(false);

    // Desktop uses the reference framing (closer than mobile, narrower FOV).
    const camera = canvasCameraSpy.mock.calls.at(-1)?.[0] as {
      position: number[];
      fov: number;
    };
    expect(camera.position[2]).toBe(16);
    expect(camera.fov).toBe(45);
  });
});
