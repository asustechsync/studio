# Studio

Web de servicios y portafolio, hecha con Astro. El contenido se edita directamente en archivos Markdown y JSON.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Sitio en http://localhost:4321 |
| `npm run build` | Compila el sitio en `dist/` |
| `npm run preview` | Sirve la versión compilada |
| `npm run verificar` | Revisa tipos (`astro check`) y compila; correrlo antes de publicar |

## Dónde está cada cosa

```
src/
├ componentes/
│ ├ secciones/       bloques de página: Portada, Soluciones, Portafolio, Preguntas…
│ │ └ solucion/      bloques de las páginas de solución (encabezado, planes, tres bloques)
│ ├ ilustraciones/   animaciones de la portada y de las soluciones
│ ├ sitio/           lo que va en todas las páginas: Cabecera, Pie, DatosNegocio
│ └ ui/              piezas pequeñas: Icono, Paquete
├ content/           paquetes/ y proyectos/ en Markdown
├ datos/
│ ├ negocio.json     marca, WhatsApp, correo, RUC, descripción, analítica y redes
│ ├ textos.json      portada, garantías, pasos, preguntas, sobre mí y testimonios
│ └ soluciones.ts    contenido de cada página de solución
├ estilos/           tokens, base, componentes y animaciones (ver docs/estilos.md)
├ layouts/           Base (head, SEO, scripts) e Interna (páginas del menú)
├ lib/               funciones chicas: enlaces de WhatsApp, títulos, sobre mí
└ pages/             rutas del sitio
public/              favicon, imagen al compartir, _headers y fotos (imagenes/)
scripts/             imagenes-marca.mjs: regenera favicon e imagen al compartir
```

## Antes de publicar

1. Revisa WhatsApp, correo y RUC en `src/datos/negocio.json`.
2. Pon el dominio real en `site` de `astro.config.mjs`. De ahí salen el sitemap, `robots.txt`, la URL canónica y los datos para Google.
3. Pega el token de Cloudflare Web Analytics en `analitica.cloudflareToken` de `negocio.json`.
4. Completa `sobreMi` y `testimonios` en `src/datos/textos.json`; mientras estén vacíos, «Sobre mí» no se indexa.

## SEO incluido

- `sitemap-index.xml` generado al compilar con `@astrojs/sitemap`.
- `robots.txt` generado desde `src/pages/robots.txt.ts`.
- URL canónica, Open Graph e imagen al compartir (`public/compartir.png`) en `src/layouts/Base.astro`.
- Datos Schema.org del negocio y sus paquetes en `src/componentes/sitio/DatosNegocio.astro`.
