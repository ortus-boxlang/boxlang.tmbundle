import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src/demo',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/demo/index.html'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['monaco-editor'],
  },
  define: {
    // Monaco Editor requires this for proper module resolution
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  worker: {
    format: 'es'
  }
});
