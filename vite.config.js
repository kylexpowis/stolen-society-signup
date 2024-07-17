import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const REGION = env.VITE_MAILCHIMP_REGION;
  const LIST_ID = env.VITE_MAILCHIMP_LIST_ID;

  return {
    plugins: [react(), vercel()],
    server: {
      proxy: {
        "/api/mailchimp/members": {
          target: `https://${REGION}.api.mailchimp.com/3.0`,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(/^\/api\/mailchimp/, `/lists/${LIST_ID}`),
        },
      },
    },
  };
});
