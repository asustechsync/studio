// Colecciones de contenido. Cada archivo .md de src/content/ es una entrada.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const paquetes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/paquetes' }),
	schema: z.object({
		linea: z.enum(['webs', 'tiendas']),
		nombre: z.string(),
		etiqueta: z.string(),
		precio: z.number(),
		precioDesde: z.boolean().default(false),
		plazo: z.string(),
		renovacion: z.string().optional(),
		incluye: z.array(z.string()),
		noIncluye: z.array(z.string()).default([]),
		destacado: z.boolean().default(false),
		orden: z.number(),
		publicado: z.boolean().default(true),
	}),
});

const proyectos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
	schema: z.object({
		titulo: z.string(),
		descripcion: z.string(),
		tecnologias: z.array(z.string()).default([]),
		imagen: z.string().optional(),
		enlace: z.string().optional(),
		/** Slug de la solución a la que pertenece (ver src/datos/soluciones.ts). */
		solucion: z.string().optional(),
		orden: z.number(),
		publicado: z.boolean().default(true),
	}),
});

export const collections = { paquetes, proyectos };
