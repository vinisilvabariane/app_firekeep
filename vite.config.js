import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const workerSource = `export default {
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request);
    const contentType = assetResponse.headers.get("content-type") || "";

    if (assetResponse.status !== 404 && contentType.includes("text/html")) {
      const origin = new URL(request.url).origin;
      const html = (await assetResponse.text()).replaceAll("__FIREKEEP_ORIGIN__", origin);
      return new Response(html, {
        status: assetResponse.status,
        headers: assetResponse.headers,
      });
    }

    if (assetResponse.status !== 404) return assetResponse;

    const fallbackUrl = new URL("/index.html", request.url);
    const fallback = await env.ASSETS.fetch(new Request(fallbackUrl, request));
    const origin = new URL(request.url).origin;
    const html = (await fallback.text()).replaceAll("__FIREKEEP_ORIGIN__", origin);
    return new Response(html, {
      status: 200,
      headers: fallback.headers,
    });
  },
};
`;

function sitesWorker() {
  return {
    name: "firekeep-sites-worker",
    closeBundle() {
      mkdirSync("dist/server", { recursive: true });
      writeFileSync("dist/server/index.js", workerSource);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitesWorker()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
});
