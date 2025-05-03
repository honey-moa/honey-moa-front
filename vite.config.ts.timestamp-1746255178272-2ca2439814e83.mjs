// vite.config.ts
import react from "file:///C:/JJ_file/honey-moa-client/honey-moa-dev1/honey-moa-front/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { ViteFaviconsPlugin } from "file:///C:/JJ_file/honey-moa-client/honey-moa-dev1/honey-moa-front/node_modules/vite-plugin-favicon/dist/index.js";
var __vite_injected_original_dirname = "C:\\JJ_file\\honey-moa-client\\honey-moa-dev1\\honey-moa-front";
var vite_config_default = {
  plugins: [
    react(),
    ViteFaviconsPlugin({
      logo: "./public/images/siteLogo.jpg",
      // svg works too!
      favicons: {
        appName: "\uAFC0\uBAA8\uC544",
        appDescription: "\uCEE4\uD50C\uC758 \uD504\uB77C\uC774\uBE57 \uBE14\uB85C\uADF8"
      }
    })
  ],
  test: {
    browser: {
      provider: "webdriverio",
      enabled: true,
      name: "chrome",
      setupFiles: ["./vitest-setup.ts"]
    }
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  },
  server: {
    host: "0.0.0.0",
    port: 3e3
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxKSl9maWxlXFxcXGhvbmV5LW1vYS1jbGllbnRcXFxcaG9uZXktbW9hLWRldjFcXFxcaG9uZXktbW9hLWZyb250XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxKSl9maWxlXFxcXGhvbmV5LW1vYS1jbGllbnRcXFxcaG9uZXktbW9hLWRldjFcXFxcaG9uZXktbW9hLWZyb250XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9KSl9maWxlL2hvbmV5LW1vYS1jbGllbnQvaG9uZXktbW9hLWRldjEvaG9uZXktbW9hLWZyb250L3ZpdGUuY29uZmlnLnRzXCI7LyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IFZpdGVGYXZpY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWZhdmljb24nO1xyXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlRmF2aWNvbnNQbHVnaW4oe1xyXG4gICAgICBsb2dvOiAnLi9wdWJsaWMvaW1hZ2VzL3NpdGVMb2dvLmpwZycsIC8vIHN2ZyB3b3JrcyB0b28hXHJcbiAgICAgIGZhdmljb25zOiB7XHJcbiAgICAgICAgYXBwTmFtZTogJ1x1QUZDMFx1QkFBOFx1QzU0NCcsXHJcbiAgICAgICAgYXBwRGVzY3JpcHRpb246ICdcdUNFRTRcdUQ1MENcdUM3NTggXHVENTA0XHVCNzdDXHVDNzc0XHVCRTU3IFx1QkUxNFx1Qjg1Q1x1QURGOCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHRlc3Q6IHtcclxuICAgIGJyb3dzZXI6IHtcclxuICAgICAgcHJvdmlkZXI6ICd3ZWJkcml2ZXJpbycsXHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIG5hbWU6ICdjaHJvbWUnLFxyXG4gICAgICBzZXR1cEZpbGVzOiBbJy4vdml0ZXN0LXNldHVwLnRzJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IFt7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSB9XSxcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgcG9ydDogMzAwMCxcclxuICB9LFxyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLDBCQUEwQjtBQUhuQyxJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRO0FBQUEsRUFDYixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixtQkFBbUI7QUFBQSxNQUNqQixNQUFNO0FBQUE7QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sWUFBWSxDQUFDLG1CQUFtQjtBQUFBLElBQ2xDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWEsS0FBSyxRQUFRLGtDQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDcEU7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
