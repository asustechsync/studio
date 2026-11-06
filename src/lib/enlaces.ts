import sitio from '../datos/sitio.json';

/** Enlace a WhatsApp con un mensaje ya escrito. */
export function enlaceWhatsapp(mensaje: string = sitio.mensajeWhatsapp): string {
	return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

const formatoSoles = new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 });

/** 1290 -> "S/ 1,290" */
export function precioEnSoles(monto: number): string {
	return `S/ ${formatoSoles.format(monto)}`;
}
