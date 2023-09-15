import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      proxy: {
        "/api/subscribers": `http://localhost:${env.VITE_PORT}`,
      },
    },
    plugins: [react()],
  };
});
