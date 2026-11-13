// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages publica el sitio en https://<usuario>.github.io/<repo>/
// SITE y BASE_PATH los define el workflow de deploy; en local queda en la raíz.
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
