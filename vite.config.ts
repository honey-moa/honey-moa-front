/* eslint-disable @typescript-eslint/no-explicit-any */
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default {
  plugins: [
    react(),
    {
      name: 'rewrite-middleware',
      configureServer(serve: any) {
        serve.middlewares.use((req: any, res: any, next: any) => {
          if (req.url.startsWith('/nested/')) {
            req.url = '/nested/';
          }
          next();
        });
      },
    },
  ],
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
      '/api': {
        target:
          'http://app-prod-load-balancer-1596393594.ap-northeast-2.elb.amazonaws.com',
        rewrite: (path: any) => path.replace(/^\/api/, ''),
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
