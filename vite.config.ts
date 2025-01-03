import react from '@vitejs/plugin-react-swc';

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
};
