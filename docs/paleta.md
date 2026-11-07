# Paleta y fondos de la web: «Tinta y arcilla» (solo versión oscura)

Fuente de verdad en código: `src/estilos/global.css` (variables en `:root`, con `color-scheme: dark`).

Tipografía: Poppins 600 (títulos), Manrope 400/500/600 (texto) e Instrument Serif cursiva solo para las palabras destacadas del título de la portada.

## Colores de la interfaz

| Variable | Valor | Uso |
|---|---|---|
| `--color-fondo` | `#141413` | Fondo general uniforme (tinta) |
| `--color-superficie` | `#1d1c1a` | Tarjetas y pestañas |
| `--color-texto` | `#faf9f5` | Texto principal |
| `--color-suave` | `#9b988f` | Texto secundario |
| `--color-borde` | `#2c2a27` | Bordes de tarjetas |
| `--color-marca` | `#d97757` | Arcilla: botones, íconos, acentos |
| `--color-marca-texto` | `#e8a47f` | Arcilla clara para texto pequeño |
| `--color-marca-suave` | `rgb(217 119 87 / 0.12)` | Fondo de etiquetas |
| `--color-crema` | `#faf9f5` | Botón claro sobre el paquete destacado |
| `--color-oscuro` | `#0f0e0d` | Pie de página (un tono más oscuro que el fondo) |
| `--color-whatsapp` | `#1a9a4f` | Botón de WhatsApp |
| `--color-exito` | `#5ec28f` | Checks de las listas |

Los botones rellenos de arcilla llevan texto `#141413` (el blanco no tiene suficiente contraste sobre `#d97757`).

## Tonos de tinta (Cómo trabajo y paquete destacado)

`--cielo-noche #141413` · `--cielo-medio #1d1c1a` · `--cielo-violeta #2a221e` · `--cielo-terracota #d97757` · `--cielo-arena #e8b89d`

(Los nombres «cielo» vienen de la versión anterior de atardecer.)

## Cerros de Tacna (oscuros, muy sutiles)

Portada: `#2b221d` · `#241d19` · `#1c1815` · `#161311`
Pie: `#241d19` · `#1c1815` · `#161311` · `#0f0e0d`

## Fondos por bloque (orden actual)

1. Cabecera: tinta translúcida; transparente al inicio.
2. Portada: tinta con resplandor arcilla suave y cerros oscuros. El panel de ejemplo conserva su fondo oscuro.
3. Garantías: `--color-fondo`.
4. Portafolio: `--color-fondo`, tarjetas `--color-superficie`.
5. Paquetes: `--color-fondo` con resplandor arcilla leve arriba. Paquete destacado con borde arcilla y brillo.
6. Cómo trabajo: degradado de tinta con resplandor arcilla abajo.
7. Preguntas: `--color-fondo`.
8. Llamado + pie: franja de cerros que va del fondo al pie, sobre `--color-oscuro`.

## Sombra y movimiento

- `--sombra-suave`: `0 1px 2px rgb(0 0 0 / .3), 0 12px 32px -12px rgb(0 0 0 / .5)`
- Aparición de bloques: 0,9 s, `cubic-bezier(0.16, 1, 0.3, 1)`, sube 22 px, escalonado 110 ms.
