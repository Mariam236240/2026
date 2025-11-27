import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/2026/' // لازم يكون اسم الريبو بالظبط
});
