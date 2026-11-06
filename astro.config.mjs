// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Dominio final del sitio. Lo usan el sitemap, robots.txt, la URL canónica y Open Graph.
	site: 'https://studio.pe',
	integrations: [sitemap()],
});
