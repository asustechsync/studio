// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import textos from './src/datos/textos.json' with { type: 'json' };

// Páginas que no entran al sitemap: Sobre mí mientras no tenga nombre y texto
const sobreMiCompleta = Boolean(textos.sobreMi.nombre && textos.sobreMi.texto);

// https://astro.build/config
export default defineConfig({
	// Dominio final del sitio. Lo usan el sitemap, robots.txt, la URL canónica y Open Graph.
	site: 'https://studio.pe',
	integrations: [sitemap({ filter: (pagina) => sobreMiCompleta || !pagina.endsWith('/sobre-mi/') })],
	// Sin bloques de código en el sitio: se apaga Shiki, que usa estilos en línea incompatibles con la CSP
	markdown: { syntaxHighlight: false },
	security: {
		// Política de seguridad (CSP) en cada página: solo corren los scripts que Astro firmó con su hash.
		// Los estilos permiten 'unsafe-inline' porque las ilustraciones usan atributos style; eso no ejecuta código.
		// frame-ancestors y el resto de cabeceras van en public/_headers (una etiqueta meta no las admite).
		csp: {
			directives: [
				"default-src 'self'",
				"img-src 'self' data: https:",
				"font-src 'self'",
				"connect-src 'self' https://cloudflareinsights.com",
				"base-uri 'self'",
				"form-action 'self' https://wa.me https://api.whatsapp.com",
				"object-src 'none'",
			],
			// Además de los scripts propios (firmados por Astro), solo el contador de Cloudflare Web Analytics
			scriptDirective: {
				resources: ["'self'", 'https://static.cloudflareinsights.com'],
			},
			styleDirective: {
				resources: ["'self'", "'unsafe-inline'"],
			},
		},
	},
});
