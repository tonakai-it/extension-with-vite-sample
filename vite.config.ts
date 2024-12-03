import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { crx, defineManifest } from "@crxjs/vite-plugin";
import { manifest } from './manifest'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest: defineManifest(manifest) })
  ],
})
