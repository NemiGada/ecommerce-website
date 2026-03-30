import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // ADD THIS LINE: It tells GitHub Pages where your site is hosted
  base: '/ecommerce-website/', 
  
  plugins: [react()],
  server: {
    port: 3002,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});