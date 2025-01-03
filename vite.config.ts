import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default {
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
    },
    provider: 'playwright',
  },
};
