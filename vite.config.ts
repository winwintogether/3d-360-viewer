import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      name: 'Model360Viewer',
      entry: 'src/main.tsx',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [
    tsConfigPaths(),
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
      terminal: true,
    }),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
