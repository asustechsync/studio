/**
 * Parte un titular en trozos para resaltar palabras sin insertar HTML.
 * Lo que va entre asteriscos sale en cursiva: "Lo que suelen *preguntar*".
 * Devuelve trozos de texto plano; los impares son los resaltados.
 */
export const partesTitular = (texto: string) => texto.split('*');
