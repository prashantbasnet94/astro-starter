import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import astroIcon from 'astro-icon';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1234
  },
  renderers: [ react() ],
  integrations: [ react(), astroIcon(),
    tailwind({applyBaseStyles: false}),
    sitemap() ],
  output: "hybrid",
  site: "https://unisala.com",
});

