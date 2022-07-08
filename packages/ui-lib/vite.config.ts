import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), dts()],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'preact'
      ],
    },
    outDir: ".ui"
  },
  server: {
    port: 4444
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
