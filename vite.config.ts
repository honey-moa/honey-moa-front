/* eslint-disable @typescript-eslint/no-explicit-any */
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default {
  plugins: [react()],
  test: {
    browser: {
      provider: 'webdriverio',
      enabled: true,
      name: 'chrome',
      setupFiles: ['./vitest-setup.ts'],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
};
