// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(
    {
			css: false,
			html: false,
			img: true,
			js: false,
			svg: true,
		}
  )]
} // Here is you configure your app
);