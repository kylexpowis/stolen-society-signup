import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/mailchimp': {
          target: `https://${env.VITE_MAILCHIMP_REGION}.api.mailchimp.com/3.0`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/mailchimp/, `/lists/${env.VITE_MAILCHIMP_LIST_ID}`),
        },
      },
    },
  };
});
