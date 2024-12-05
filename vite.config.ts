import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LOUDY_WEB/', // Sesuaikan dengan nama repository Anda di GitHub
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
