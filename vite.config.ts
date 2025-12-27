import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base path - matches repository name 'PortfolioMZ'
  base: process.env.NODE_ENV === 'production' ? '/PortfolioMZ/' : '/',
})
