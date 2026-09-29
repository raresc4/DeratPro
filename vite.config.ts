import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type UserConfig } from 'vite'
import type { InlineConfig } from 'vitest/node'

// Vitest reads a `test` field on the Vite config. We attach it via an explicit
// intersection type instead of relying on the `vitest/config` module
// augmentation, which does not resolve cleanly here because this project runs
// Vite 8 (rolldown) while vitest bundles a different Vite version.
type ViteConfigWithTest = UserConfig & { test: InlineConfig }

const config: ViteConfigWithTest = {
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.glb'],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
}

// https://vite.dev/config/
export default defineConfig(config)
