import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Kicks/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@entities': path.resolve(__dirname, './src/entities'),
      // "@hooks": path.resolve(__dirname, "./src/hooks"),
      // "@utils": path.resolve(__dirname, "./src/utils"),
      // "@types": path.resolve(__dirname, "./src/types"),
      // "@assets": path.resolve(__dirname, "./src/assets"),
      // "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
