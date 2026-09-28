import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

function SpinningBox() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4
      meshRef.current.rotation.y += delta * 0.6
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  )
}

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 text-slate-100">
      <h1 className="text-3xl font-bold tracking-tight text-indigo-400">
        Tailwind + Three.js are ready
      </h1>
      <p className="text-sm text-slate-400">Drag the cube to orbit the camera.</p>

      <div className="h-80 w-80 overflow-hidden rounded-xl border border-slate-800 shadow-lg">
        <Canvas camera={{ position: [3, 3, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <SpinningBox />
          <OrbitControls enablePan={false} />
        </Canvas>
      </div>
    </div>
  )
}

export default App
