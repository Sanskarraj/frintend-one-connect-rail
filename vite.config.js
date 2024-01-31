import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://backend-two-production.up.railway.app',
    }
  },
  plugins: [vue()],
})
