import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    update: true,
    environment: 'jsdom',
    setupFiles: ['src/__testing__/setup.ts'],
    globals: true,
  },
})
