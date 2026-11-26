import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import adapter from "@sveltejs/adapter-static";
import { defineConfig } from "vite";

// openrms.dev is fully prerendered: every page is plain HTML in build/, served by
// Cloudflare Workers Static Assets (see wrangler.jsonc). 404.html is the not-found page.
export default defineConfig({
  plugins: [tailwindcss(), sveltekit({ adapter: adapter({ fallback: "404.html" }) })],
  server: { port: 5174 },
});
