import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
};
