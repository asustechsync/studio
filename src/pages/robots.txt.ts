import type { APIRoute } from 'astro';

// Se genera al compilar, así el enlace al sitemap usa siempre el `site` de astro.config.mjs.
export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL('sitemap-index.xml', site);
	return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
