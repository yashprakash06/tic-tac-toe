
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: '/tic-tac-toe/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/404.html',
          dest: '.'
        }
      ]
    })
  ],
});
