import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Critical for Render
    port: Number(process.env.PORT) || 5173,
    strictPort: true, // Crash if port is unavailable
  },
  preview: {
    host: '0.0.0.0', // Also bind preview to 0.0.0.0
    port: Number(process.env.PORT) || 5173,
    strictPort: true,
  }
});
