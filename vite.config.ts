import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PUBLIC_PATH,
  plugins: [vue()],
});
