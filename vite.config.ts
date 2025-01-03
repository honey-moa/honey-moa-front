import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default {
  plugins: [react()],
  test: {
    browser: {
      provider: 'preview',
      enabled: true,
      name: 'chromium',
    },
  },
};
