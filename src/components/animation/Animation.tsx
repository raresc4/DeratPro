import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import type { Group } from "three";
import { useIsMobile } from "../../hooks/useIsMobile";
import { resolveRunAction } from "./runAction";

import mouseHighUrl from "../../assets/mouse/mouse_high.glb?url";
import mouseLowUrl from "../../assets/mouse/mouse_low.glb?url";
import mouseHoleUrl from "../../assets/mouse_hole/mouse_hole.glb?url";

// World layout (X axis = running direction). Shared across breakpoints — mobile
// only zooms the camera out, it never restructures the scene.
const START_X = -6;
const HOLE_X = 3;
const RUN_SPEED = 2.5; 
const ENTER_DISTANCE = 0.3; 
const SHRINK_SPEED = 4; 
const HOLE_SCALE = 2.5; 
const HOLE_Y_ROTATION = -4.2;

// Camera framing. Desktop is the reference; mobile pulls the camera back and
// widens the FOV so the identical scene simply reads smaller. The camera looks
// straight at the scene center (Y ~= 0.5) so the action is vertically centered.
const CAM_TARGET: [number, number, number] = [0, 0.5, 0];
const DESKTOP_CAM_POS: [number, number, number] = [0, 0.5, 16];
const DESKTOP_FOV = 45;
const MOBILE_CAM_POS: [number, number, number] = [0, 0.5, 11];
const MOBILE_FOV = 50;

function MouseHole() {
  const { scene } = useGLTF(mouseHoleUrl);
  return <primitive object={scene} position={[HOLE_X, 0, 0]} scale={HOLE_SCALE} rotation={[0, HOLE_Y_ROTATION, 0]}/>;
}

function RunningMouse({ modelUrl }: { modelUrl: string }) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF(modelUrl);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const run = resolveRunAction(actions);
    if (!run) return;
    run.reset().fadeIn(0.2).play();
    return () => {
      run.fadeOut(0.2);
    };
  }, [actions]);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;

    const distanceToHole = HOLE_X - g.position.x;

    if (distanceToHole > ENTER_DISTANCE) {
      g.position.x += RUN_SPEED * delta;
      g.visible = true;
      g.scale.setScalar(1);
    } else {
      const s = g.scale.x - delta * SHRINK_SPEED;
      if (s <= 0) {
        g.position.x = START_X;
        g.scale.setScalar(1);
      } else {
        g.scale.setScalar(s);
      }
    }
  });

  return (
    <group ref={group} position={[START_X, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Animation() {
  const isMobile = useIsMobile();
  const modelUrl = isMobile ? mouseLowUrl : mouseHighUrl;

  // Preload only the model we will actually render, to honor the mobile
  // bandwidth goal (don't fetch the high-poly asset on phones).
  useGLTF.preload(modelUrl);

  return (
    <Canvas
      camera={{
        position: isMobile ? MOBILE_CAM_POS : DESKTOP_CAM_POS,
        fov: isMobile ? MOBILE_FOV : DESKTOP_FOV,
      }}
      onCreated={({ camera }) => camera.lookAt(...CAM_TARGET)}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <MouseHole />
        <RunningMouse modelUrl={modelUrl} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(mouseHoleUrl);

export { RunningMouse };
