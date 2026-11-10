# Estilos de Studio

Paleta «Tinta y arcilla» (solo versión oscura). Todo el diseño sale de **tokens**: los componentes no escriben colores, tamaños ni radios a mano.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `src/estilos/tokens.css` | Única fuente de colores, tipografía, espacios, radios, sombras, tarjeta y movimiento |
| `src/estilos/base.css` | Reset mínimo y estilos de `body`, títulos, enlaces, imágenes y foco |
| `src/estilos/componentes.css` | Piezas compartidas: `.contenedor`, `.seccion`, `.encabezado-seccion`, `.boton*`, `.tarjeta` |
| `src/estilos/animaciones.css` | Aparición al hacer scroll (`.revela`) y keyframes compartidos |
| `src/estilos/global.css` | Solo importa los cuatro anteriores, en ese orden |

Cada componente `.astro` guarda en su `<style>` solo su maquetación y sus animaciones propias, siempre con `var(--…)`.

## Reglas

1. **Colores**: solo tokens. Para transparencias se usa `color-mix(in srgb, var(--color-marca) 30%, transparent)`, nunca `rgb(… / 0.3)`.
2. **Texto**: escala `--texto-2xs` (11) · `xs` (12) · `sm` (13) · `md` (14) · `base` (15) · `lg` (16) · `xl` (18) · `2xl` (20) · `3xl` (24). Títulos fluidos: `--titulo-sm`, `--titulo-seccion`, `--titulo-pagina`, `--titulo-portada`; intro bajo títulos: `--texto-intro`.
3. **Radios** (esquinas cortas): `--radio-xs` 4 · `--radio-sm` 6 · `--radio` 8 · `--radio-lg` 12 · `--radio-redondo` 50 %. Sin píldoras.
4. **Quiebres**: solo `640px`, `768px` y `1024px` (las media queries no aceptan variables). Las ilustraciones animadas usan además `max-width: 420px` para celulares pequeños.
5. **Tarjetas**: `class="tarjeta"` da fondo, borde, radio y sombra; `tarjeta--elevable` añade la subida al pasar el mouse.
6. **Movimiento**: toda animación va dentro de `@media (prefers-reduced-motion: no-preference)` o se apaga en `reduce`.
7. **Fuentes**: alojadas con `@fontsource` (Poppins 600, Manrope 400/500/600, Instrument Serif normal y cursiva), importadas en `src/layouts/Base.astro`. Poppins 600 y Manrope 400 se precargan.
8. **Palabras resaltadas en títulos**: se marcan con asteriscos (`"Lo que suelen *preguntar*"`) y `partesTitular()` de `src/lib/texto.ts` las convierte en `<em>`. Nunca `set:html` con texto de contenido.
9. **Ilustraciones animadas**: su elemento raíz lleva `data-animado`; el script de `Base.astro` las congela (`.fuera-de-vista`) mientras no se ven.

## Seguridad y archivos públicos

- `astro.config.mjs → security.csp`: Astro firma con hash cada script de cada página; ningún script inyectado puede correr.
- `public/_headers`: HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` y caché larga para `/_astro/*` (Cloudflare Pages).
- Visitas: Cloudflare Web Analytics se activa al poner `analitica.cloudflareToken` en `negocio.json` (solo en el build publicado). Cada clic a WhatsApp emite `clic_whatsapp` en `window.dataLayer` y el evento `studio:whatsapp`.
- `sobre-mi`: mientras `sobreMi.nombre` y `sobreMi.texto` de `textos.json` estén vacíos, la página muestra «Muy pronto», lleva `noindex` y no entra al sitemap.
- `npm run verificar`: `astro check` + `astro build`; correrlo antes de publicar.
- `scripts/imagenes-marca.mjs`: regenera `compartir.png`, `favicon.ico` y `apple-touch-icon.png` con los colores de marca (`node scripts/imagenes-marca.mjs`).

## Colores principales

| Token | Valor | Uso |
|---|---|---|
| `--color-fondo` | `#141413` | Fondo general |
| `--color-superficie` | `#1d1c1a` | Tarjetas |
| `--color-superficie-alta` | `#26241f` | Hover de superficies |
| `--color-oscuro` | `#0f0e0d` | Lo más oscuro (texto sobre crema) |
| `--color-texto` | `#faf9f5` | Texto principal |
| `--color-suave` | `#9b988f` | Texto secundario |
| `--color-apagado` / `--color-muy-apagado` | `#7a756b` / `#5b574f` | Detalles grises de las ilustraciones |
| `--color-borde` / `--color-borde-fuerte` | `#2c2a27` / `#3d3a34` | Bordes |
| `--color-marca` | `#d97757` | Arcilla: botones, íconos, acentos |
| `--color-marca-hover` | `#e5895f` | Hover del botón de marca |
| `--color-marca-texto` | `#e8a47f` | Arcilla clara para texto pequeño |
| `--color-marca-sombra` | `#3a2a22` | Arcilla muy oscura para degradados |
| `--color-whatsapp` | `#1a9a4f` | Botón de WhatsApp |
| `--color-exito` | `#5ec28f` | Mensajes y señales de éxito |

## Cambiar de paleta

Se editan solo los valores de `src/estilos/tokens.css`. Ningún componente necesita cambios.
