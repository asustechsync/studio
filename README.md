# Studio

Web de servicios y portafolio, hecha con Astro. El contenido se edita directamente en archivos Markdown y JSON.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Sitio en http://localhost:4321 |
| `npm run build` | Compila el sitio en `dist/` |
| `npm run preview` | Sirve la versión compilada |

## Dónde está cada cosa

- `src/content/paquetes/` — un archivo por paquete (precio, qué incluye, orden).
- `src/content/proyectos/` — un archivo por proyecto del portafolio.
- `src/datos/sitio.json` — marca, WhatsApp, textos de portada, pasos y llamado final.
- `src/componentes/` — secciones de la página.
- `src/estilos/global.css` — colores, fuentes y espaciados.
- `public/imagenes/` — fotos del portafolio (en el proyecto: `imagen: /imagenes/foto.jpg`).

## Antes de publicar

1. Cambia el número de WhatsApp y el correo en `src/datos/sitio.json`.
2. Pon el dominio real en `site` de `astro.config.mjs`. De ahí salen el sitemap, `robots.txt`, la URL canónica y los datos para Google.
3. Sube una imagen de 1200 × 630 px a `public/` y pon su ruta en `imagenCompartir` de `sitio.json` (por ejemplo `/compartir.jpg`). Es la vista previa al compartir el enlace por WhatsApp o Facebook.

## SEO incluido

- `sitemap-index.xml` generado al compilar con `@astrojs/sitemap`.
- `robots.txt` generado desde `src/pages/robots.txt.ts`.
- URL canónica y Open Graph en `src/layouts/Base.astro`.
- Datos Schema.org del negocio y sus paquetes en `src/componentes/DatosNegocio.astro`.
