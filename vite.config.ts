import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //@ts-ignore
  test: {
    browser: {
      enabled: true,
      name: 'chromium', // 크롬 브라우저 사용중
      provider: 'playwright',
    },
  },
});
