import negocio from '../datos/negocio.json';

/** Enlace a WhatsApp con un mensaje ya escrito. */
export function enlaceWhatsapp(mensaje: string = negocio.mensajeWhatsapp): string {
	return `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

const formatoSoles = new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 });

/** 1290 -> "S/ 1,290" */
export function precioEnSoles(monto: number): string {
	return `S/ ${formatoSoles.format(monto)}`;
}
