// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // src 폴더를 쉽게 import 할 수 있도록 설정
    },
  },
});
