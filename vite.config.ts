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
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
      '/api/v1': {
        target: `http://app-prod-load-balancer-1596393594.ap-northeast-2.elb.amazonaws.com`,
        changeOrigin: true,
        secure: false, // HTTPS → HTTP 허용
      },
    },
  },
};
