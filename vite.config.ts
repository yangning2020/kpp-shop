import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 5173,
    proxy: {
      // 代理以 /api 开头的请求
      "/api": {
        target: "https://shop.kapaipai.tw",
        changeOrigin: true,
      },
      "/image": {
        target: "https://image.kapaipai.tw",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/image/, "/api"), // 將/image 替換為 /api
      },
    },
  },
});
