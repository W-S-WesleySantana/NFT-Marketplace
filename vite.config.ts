import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <- Adiciona o plugin oficial do Tailwind v4
  ],
  server: {
    port: 5173,
  },
});