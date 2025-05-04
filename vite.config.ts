/* eslint-disable @typescript-eslint/no-explicit-any */
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon';
// https://vite.dev/config/
export default {
  plugins: [
    react(),
    ViteFaviconsPlugin({
      logo: './public/images/siteLogo.jpg', // svg works too!
      favicons: {
        appName: '꿀모아',
        appDescription: '커플의 프라이빗 블로그',
      },
    }),
  ],
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
