import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If your repository name is 'portfolio', use '/portfolio/'
  // If your repository name is 'YOUR_USERNAME.github.io', use '/'
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
})
