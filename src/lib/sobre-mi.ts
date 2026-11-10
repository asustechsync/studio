import textos from '../datos/textos.json';

/** La página Sobre mí solo se publica en Google cuando tiene nombre y texto. */
export const sobreMiCompleta = Boolean(textos.sobreMi.nombre && textos.sobreMi.texto);
