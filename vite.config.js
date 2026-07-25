import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname),
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: true,
    fs: { strict: false },
    watch: {
      ignored: [
        '**/frontend/**',
        path.resolve(__dirname, 'frontend') + '/**',
        path.resolve(__dirname, 'frontend'),
        '**/node_modules/**',
        '**/.git/**',
      ],
      followSymlinks: false,
      usePolling: false,
    },
  },
  resolve: {
    preserveSymlinks: true,
  },
})
