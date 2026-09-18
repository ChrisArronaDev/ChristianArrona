import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative assets work both at Netlify's domain root and under the
  // /ChristianArrona/ subdirectory used by GitHub Pages.
  base: "./",
});
