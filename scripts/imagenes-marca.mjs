// Genera public/compartir.png (vista al compartir), public/favicon.ico y public/apple-touch-icon.png
// a partir de los colores de marca. Uso: node scripts/imagenes-marca.mjs
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const fondo = '#141413';
const marca = '#d97757';
const texto = '#faf9f5';
const suave = '#9b988f';
const letra = "Poppins, 'Segoe UI Semibold', 'Segoe UI', sans-serif";

const compartir = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><radialGradient id="g" cx="0.85" cy="1.1" r="0.8"><stop offset="0" stop-color="${marca}" stop-opacity="0.35"/><stop offset="1" stop-color="${marca}" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="${fondo}"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="80" y="80" width="64" height="64" rx="12" fill="${marca}"/>
  <text x="112" y="126" text-anchor="middle" font-family="${letra}" font-weight="600" font-size="38" fill="${fondo}">S</text>
  <text x="166" y="124" font-family="${letra}" font-weight="600" font-size="34" fill="${texto}">Studio</text>
  <text x="80" y="330" font-family="${letra}" font-weight="600" font-size="68" fill="${texto}">Webs y tiendas online</text>
  <text x="80" y="415" font-family="${letra}" font-weight="600" font-size="68" fill="${marca}">para tu negocio</text>
  <text x="80" y="530" font-family="${letra}" font-size="28" fill="${suave}">Desarrollo web y comercio electrónico · Tacna, Perú</text>
</svg>`;

const icono = (tam) => `<svg xmlns="http://www.w3.org/2000/svg" width="${tam}" height="${tam}" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="${marca}"/>
  <text x="16" y="22.5" text-anchor="middle" font-family="${letra}" font-weight="600" font-size="19" fill="${fondo}">S</text>
</svg>`;

await sharp(Buffer.from(compartir)).png({ compressionLevel: 9 }).toFile('public/compartir.png');
await sharp(Buffer.from(icono(180))).png().toFile('public/apple-touch-icon.png');

// favicon.ico con una imagen PNG de 32 px dentro (formato ICO válido para todos los navegadores)
const png = await sharp(Buffer.from(icono(32))).png().toBuffer();
const cabecera = Buffer.alloc(22);
cabecera.writeUInt16LE(0, 0); cabecera.writeUInt16LE(1, 2); cabecera.writeUInt16LE(1, 4);
cabecera.writeUInt8(32, 6); cabecera.writeUInt8(32, 7); cabecera.writeUInt16LE(1, 10); cabecera.writeUInt16LE(32, 12);
cabecera.writeUInt32LE(png.length, 14); cabecera.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([cabecera, png]));
console.log('Listo: compartir.png, apple-touch-icon.png, favicon.ico');
