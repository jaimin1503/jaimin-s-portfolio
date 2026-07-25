import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  root: path.resolve(__dirname),
  // For GitHub Pages under https://<user>.github.io/<repo>/ the workflow sets
  // BASE_PATH=/<repo>/. Locally and on other hosts (Vercel/Netlify), we
  // default to '/' so assets resolve correctly.
  base: command === 'build' ? (process.env.BASE_PATH || '/') : '/',
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
}))
