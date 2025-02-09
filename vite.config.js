import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
}
                              export default {
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
};
