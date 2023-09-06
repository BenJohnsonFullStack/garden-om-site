import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PORT = process.env.PORT || 9000;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/subscribers": `http://localhost:${PORT}`,
    },
  },
  plugins: [react()],
});
