import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Firefox suele resolver localhost → 127.0.0.1; sin esto Vite a veces
    // solo escucha en [::1] y Firefox no carga.
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
