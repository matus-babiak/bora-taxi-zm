// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { PluginOption } from "vite";

// Vercel: TanStack docs — use Nitro (no Cloudflare worker bundle). Cloudflare stays default locally & on wrangler deploy.
const deployVercel = process.env.VERCEL === "1";

// Nitro len pri Vercel builde — inak tapable rozbije `npm run dev` lokálne.
const vercelPlugins: PluginOption[] = deployVercel
  ? [(await import("nitro/vite")).nitro()]
  : [];

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: deployVercel ? false : undefined,
  plugins: vercelPlugins,
  tanstackStart: {
    server: { entry: "server" },
  },
});
