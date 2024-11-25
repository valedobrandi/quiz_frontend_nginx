/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const port = process.env.PORT || 5173

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    css: true,
    reporters: ['verbose'],
    coverage: {
      provider: "v8",
      exclude: ["*.config.js"],
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: "/quiz/", 
  server: { port: Number(port), host:true },
});
