// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blakor.com',

  // Astro v5+ optimizations
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],

    // Performance optimizations
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'animations': ['framer-motion'],
            'icons': ['lucide-react'],
          },
        },
      },
    },

    // Dev server optimizations
    server: {
      fs: {
        strict: false,
      },
    },

    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
      exclude: ['@fontsource/outfit', '@fontsource/inter'],
    },

    // CSS optimization
    css: {
      devSourcemap: false,
    },
  },

  integrations: [
    react({
      // React 19 optimizations
      experimentalReactChildren: true,
    }),
    sitemap()
  ],

  // Build optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});