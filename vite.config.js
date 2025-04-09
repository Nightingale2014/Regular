import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // 이거 쓰면 5173 아니면 서버 안 켜짐!
  },
});
