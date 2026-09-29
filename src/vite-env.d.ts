/// <reference types="vite/client" />

// 3D model assets imported as URLs by Vite's asset handling.
declare module '*.glb' {
  const src: string
  export default src
}

declare module '*.gltf' {
  const src: string
  export default src
}
