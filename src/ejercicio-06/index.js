// Ejercicio 6 - Dividir en Subcadenas

// Dada una cadena de texto que contiene palabras separadas por espacios, utiliza el método split() para dividir la cadena en un array de palabras individuales. Luego, imprime el array resultante.
const frase = 'Esta es una oración de ejemplo'
const frase2 = 'manzana,pera,fresa,melon'
const palabras = frase.split(' ')
const palabras2 = frase2.split(',')

console.log(palabras)
// Resultados: ['Esta', 'es', 'una', 'oración', 'de', 'ejemplo']
console.log(palabras2)
// Resultados ['manzana', 'pera', 'fresa', 'melon']
