import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'],
  root: process.cwd(),
  publicDir: 'public',
  build: {
    outDir: './dist',
    assetsDir: './assets',
    base: '/',
  },
})
