import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'],
  root: process.cwd(),
  build: {
    outDir: './dist',
    assetsDir: './assets',
    base: '/',
  },
})