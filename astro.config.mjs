// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(
    {
			css: true,
			html: true,
			img: true,
			js: true,
			svg: true,
		}
  )]
} // Here is you configure your app
);