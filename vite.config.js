import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  base: "/encephalo-ai-deck/", // This should match your repository name
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
