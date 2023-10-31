// Ejercicio 4 - Encontrar Subcadena

// Dada una cadena de texto y una subcadena, utiliza el método indexOf() para encontrar la posición de la subcadena en la cadena principal. Luego, imprime el resultado.
const frase = 'Ubi non est ordo, ibi est confusio.'
const posicion = frase.indexOf('est')
const ultimaPosicion = frase.lastIndexOf('est')

console.log(posicion + ' y ' + ultimaPosicion)
// Resultado: 8 y 22