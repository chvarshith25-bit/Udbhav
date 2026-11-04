import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// Separate entry and output: never replaces the production build or its routes.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  publicDir: fileURLToPath(new URL('../../public', import.meta.url)),
  plugins: [react(), tailwindcss()],
  server: { host: '0.0.0.0', port: 5174, fs: { allow: [fileURLToPath(new URL('../..', import.meta.url))] } },
  build: {
    outDir: 'dist', emptyOutDir: true,
    rollupOptions: { output: { manualChunks(id) {
      if (id.includes('node_modules/gsap')) return 'gsap';
      if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) return 'motion';
    } } },
  },
});
