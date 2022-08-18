import { remarkCodeHike } from '@code-hike/mdx'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
// starting from node 17, one has to use assert type to
// import json files, for now this will do.
import { createRequire } from 'module'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const require = createRequire(import.meta.url)
const theme = require('shiki/themes/github-dark-dimmed.json')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        [remarkCodeHike, { theme, lineNumbers: true, showCopyButton: true }],
      ],
    }),
    tsconfigPaths(),
  ],
})
