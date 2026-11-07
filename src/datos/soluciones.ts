// Soluciones de la portada. Cada una agrupa paquetes de src/content/paquetes/ por su nombre de archivo.
// Los precios no salen en la portada: viven en la página de cada solución.
// Un paquete con `publicado: false` no se muestra; si una solución no tiene ninguno publicado, aparece como "Próximamente".
export interface Solucion {
	slug: string;
	nombre: string;
	categoria: string;
	resumen: string;
	icono: 'mundo' | 'whatsapp' | 'carrito';
	/** Título y texto de la página de la solución. */
	titular: string;
	texto: string;
	/** Ids de la colección de paquetes (nombre del archivo sin .md). */
	paquetes: string[];
}

export const soluciones: Solucion[] = [
	{
		slug: 'web-para-tu-negocio',
		nombre: 'Una web para tu negocio',
		categoria: 'Presencia web',
		resumen: 'Que te encuentren en Google y te escriban.',
		icono: 'mundo',
		titular: 'Elige el nivel según cuánto quieras crecer',
		texto: 'Para presentar tu negocio y recibir clientes por WhatsApp. El primer año de dominio y hosting va incluido.',
		paquetes: ['landing', 'web-corporativa', 'web-administrable', 'rediseno'],
	},
	{
		slug: 'vender-por-whatsapp',
		nombre: 'Vender por WhatsApp',
		categoria: 'Ventas por chat',
		resumen: 'Catálogo online y pedidos directo a tu chat.',
		icono: 'whatsapp',
		titular: 'Muestra tus productos y recibe los pedidos en tu chat',
		texto: 'Un catálogo online con un panel para manejar productos, stock y ofertas.',
		paquetes: ['catalogo-whatsapp'],
	},
	{
		slug: 'tienda-online',
		nombre: 'Tienda con pagos y panel',
		categoria: 'Tienda online',
		resumen: 'Cobra con tarjeta, controla stock y mira tus ventas.',
		icono: 'carrito',
		titular: 'Vende todos los días, con pagos y control de tu negocio',
		texto: 'Una tienda completa con pago con tarjeta, cuentas de cliente y un panel con tus ventas.',
		paquetes: ['tienda-pro', 'tienda-app'],
	},
];
