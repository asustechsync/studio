// Soluciones de la portada. Cada una agrupa paquetes de src/content/paquetes/ por su nombre de archivo.
// Los precios no salen en la portada: viven en la página de cada solución.
// Un paquete con `publicado: false` no se muestra; si una solución no tiene ninguno publicado, aparece como "Próximamente".
export interface Solucion {
	slug: string;
	nombre: string;
	categoria: string;
	resumen: string;
	icono: 'mundo' | 'rediseno' | 'carrito';
	/** Título y texto de la página de la solución. */
	titular: string;
	texto: string;
	/** Ids de la colección de paquetes (nombre del archivo sin .md). */
	paquetes: string[];
	/** Etiquetas de la tarjeta de la portada. Si no hay, se usan los nombres de los paquetes publicados. */
	etiquetas?: string[];
	/** Palabras en cursiva que siguen al nombre en el título de la página. */
	lema: string;
	/** Nota pequeña debajo del precio, en el encabezado de la página. */
	nota?: string;
	/** Título propio de la página. Si falta, se usa "nombre, lema". */
	encabezado?: { inicio: string; cursiva: string };
	/** Franja de datos bajo el encabezado (opcional). */
	cifras?: { valor: string; texto: string }[];
	/** Lista de checks bajo el precio (opcional). */
	incluye?: string[];
	/** Bloque "Por qué": tres razones con su icono. */
	beneficios: { icono: 'celular' | 'buscar' | 'whatsapp' | 'rayo' | 'escudo' | 'carrito' | 'barras'; titulo: string; texto: string }[];
	/** Bloque "Cómo trabajamos": tres pasos. */
	pasos: { titulo: string; texto: string }[];
	/** Preguntas frecuentes propias de esta solución. */
	preguntas: { p: string; r: string }[];
}

export const soluciones: Solucion[] = [
	{
		slug: 'web-para-tu-negocio',
		nombre: 'Una web para tu negocio',
		categoria: 'Presencia web',
		resumen: 'Que te encuentren en Google y te escriban.',
		icono: 'mundo',
		titular: 'Elige el nivel según cuánto quieras crecer',
		texto: 'Creamos experiencias digitales que transmiten confianza, destacan tu negocio y te conectan con nuevos clientes.',
		nota: 'Primer año de dominio y hosting incluido',
		paquetes: ['landing', 'web-corporativa', 'web-administrable'],
		lema: 'lista en días',
		encabezado: { inicio: 'La web que', cursiva: 'tu empresa necesita' },
		cifras: [
			{ valor: '24/7', texto: 'tu web siempre en línea' },
			{ valor: '100 %', texto: 'responsive en celular y PC' },
			{ valor: '1 año', texto: 'de dominio y hosting' },
		],
		incluye: ['Diseño a medida', 'Carga optimizada', 'Certificado de seguridad'],
		beneficios: [
			{ icono: 'celular', titulo: 'Se ve bien en el celular', texto: 'Pensada primero para la pantalla del teléfono, donde te buscan tus clientes.' },
			{ icono: 'buscar', titulo: 'Te encuentran en Google', texto: 'Títulos, mapa del sitio y tu ficha en Google Maps configurados.' },
			{ icono: 'whatsapp', titulo: 'Te escriben al instante', texto: 'Botón de WhatsApp con un mensaje ya escrito.' },
		],
		pasos: [
			{ titulo: 'Nos das', texto: 'Tu logo, los textos de tu negocio y algunas fotos.' },
			{ titulo: 'Diseñamos', texto: 'Te pasamos un enlace de prueba para que revises y opines.' },
			{ titulo: 'Publicamos', texto: 'Tu web sale al aire con tu dominio, HTTPS y WhatsApp.' },
		],
		preguntas: [
			{ p: '¿Qué necesito para empezar?', r: 'Tu logo, los textos de tu negocio y algunas fotos. Si no tienes textos, te ayudamos a ordenarlos.' },
			{ p: '¿Qué plan me conviene?', r: 'La Landing si quieres algo rápido para presentar un servicio. La Corporativa si necesitas varias páginas. La Administrable si quieres cambiar textos e imágenes tú mismo.' },
			{ p: '¿Puedo cambiar los textos después?', r: 'Con la Web administrable, sí, desde tu panel. En Landing y Corporativa nos escribes y lo hacemos; los cambios después de la garantía se cotizan.' },
		],
	},
	{
		slug: 'rediseno-web',
		nombre: 'Rediseño web',
		categoria: 'Rediseño web',
		resumen: 'Llevamos tu contenido a la web nueva.',
		icono: 'rediseno',
		titular: 'Tu web vieja o lenta, convertida en una nueva',
		texto: 'Pasamos tus textos, fotos y logo a un diseño actual, rápido y que se ve bien en el celular.',
		paquetes: ['rediseno'],
		etiquetas: ['Logo', 'Textos', 'Fotos'],
		lema: 'como nueva',
		beneficios: [
			{ icono: 'rayo', titulo: 'Más rápida', texto: 'Medimos la velocidad antes y después para que veas la diferencia.' },
			{ icono: 'celular', titulo: 'Se ve bien en el celular', texto: 'Un diseño actual que se adapta a cualquier pantalla.' },
			{ icono: 'escudo', titulo: 'No pierdes lo que tienes', texto: 'Conservas tu dominio, tus correos y tu contenido.' },
		],
		pasos: [
			{ titulo: 'Revisamos', texto: 'Miramos tu web actual y medimos su velocidad.' },
			{ titulo: 'Rediseñamos', texto: 'Pasamos tus textos, fotos y logo a un diseño nuevo, con enlace de prueba.' },
			{ titulo: 'Cambiamos', texto: 'Publicamos la web nueva en tu mismo dominio, con redirecciones.' },
		],
		preguntas: [
			{ p: '¿Pierdo mi posición en Google?', r: 'Mantenemos tu dominio y, si una dirección cambia, la redirigimos a la nueva para no perder lo que ya ganaste.' },
			{ p: '¿Mi web es WordPress, sirve igual?', r: 'Sí. Pasamos tu contenido desde WordPress u otra plataforma a la web nueva.' },
			{ p: '¿Por qué el precio dice "desde"?', r: 'Depende de cuántas páginas tenga tu web actual. Te damos el precio final antes de empezar.' },
		],
	},
	{
		slug: 'tienda-online',
		nombre: 'Tienda online',
		categoria: 'Tienda online',
		resumen: 'Vende, cobra y mira tus ventas.',
		icono: 'carrito',
		titular: 'Vende todos los días, con pagos y control de tu negocio',
		texto: 'Empieza con pedidos por WhatsApp o da el salto a pagos con tarjeta, cuentas de cliente y un panel con tus ventas.',
		paquetes: ['catalogo-whatsapp', 'tienda-pro', 'tienda-app'],
		lema: 'abierta todo el día',
		beneficios: [
			{ icono: 'carrito', titulo: 'Catálogo con filtros', texto: 'Tus productos con fotos, tallas, colores y buscador.' },
			{ icono: 'whatsapp', titulo: 'Cobras como prefieras', texto: 'Yape, Plin o transferencia por WhatsApp, o tarjeta con Tienda Pro.' },
			{ icono: 'barras', titulo: 'Controlas tu negocio', texto: 'Un panel con tus productos, stock y ventas.' },
		],
		pasos: [
			{ titulo: 'Nos das', texto: 'Tu logo, tus productos con fotos y precios.' },
			{ titulo: 'Armamos', texto: 'La tienda, el panel y los medios de pago, con enlace de prueba.' },
			{ titulo: 'Abres', texto: 'Publicamos y te enseñamos a manejar tu panel.' },
		],
		preguntas: [
			{ p: '¿Cómo recibo los pedidos?', r: 'En el plan Tienda, el carrito te envía el pedido por WhatsApp. En Tienda Pro el cliente paga en la web y el pedido aparece en tu panel.' },
			{ p: '¿Hay comisión por venta?', r: 'Nosotros no cobramos comisión. Si usas pago con tarjeta, la pasarela (Culqi o Izipay) cobra la suya.' },
			{ p: '¿Quién carga los productos?', r: 'Tú, desde tu panel; te enseñamos en la capacitación. Si prefieres que los carguemos nosotros, lo cotizamos.' },
		],
	},
];
