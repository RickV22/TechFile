import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import fs from 'node:fs'
import path from 'node:path'

const legacyBundleNames = ['index-BuJP7PKg.js', 'index-D-QR2Obb.js']

// https://vite.dev/config/
export default defineConfig({
  base: '/TechFile/',
  build: {
    outDir: 'docs'
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'preserve-legacy-bundle-names',
      writeBundle(options, bundle) {
        const outputDir = options.dir || path.dirname(options.file)
        const entry = Object.values(bundle).find(
          (chunk) => chunk.type === 'chunk' && chunk.isEntry
        )

        if (!entry) return

        const entryPath = path.join(outputDir, entry.fileName)
        for (const legacyName of legacyBundleNames) {
          fs.copyFileSync(entryPath, path.join(outputDir, 'assets', legacyName))
        }
      }
    }
  ],
})
