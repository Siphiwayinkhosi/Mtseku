import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 300,
      ignored: [
        "**/.agents/**",
        "**/.codex/**",
        "**/.cursor/**",
        "**/.github/**",
        "**/.jetro/**",
        "**/.qodo/**",
        "**/.git/**",
        "**/data/**",
        "**/dist/**",
        "**/projects/**",
      ],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
