import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [VueRouter({ importMode: (filepath) => "sync" }), Vue()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      external: ["SaveFileDencrypt.js"],
      // output: {
      //   manualChunks: {
      //     changelog0000: ["./src/pages/changelog/0.1.15.vue", "./src/pages/changelog/0.1.16.vue", "./src/pages/changelog/0.1.18.vue", "./src/pages/changelog/0.1.20.vue"],
      //   },
      // },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) }],
  },
});
