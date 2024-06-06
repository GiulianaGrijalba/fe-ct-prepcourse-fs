/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const arrayResultado = [];
  for (let clave in objeto) {
    arrayResultado.push([clave, objeto[clave]]);
  }
  return arrayResultado;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const caracteres = {};
  for (let letra of string) {
    if (caracteres.hasOwnProperty(letra)) {
      caracteres[letra]++;
    } else {
      caracteres[letra] = 1;
    }
  }
  return caracteres;}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayusculas = '';
  let minusculas = '';
  for (let letra of string) {
    if (letra === letra.toUpperCase()) {
      mayusculas += letra;
    } else {
      minusculas += letra;
    }
  }
  return mayusculas + minusculas;

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
 // Separar la frase en palabras
 const palabras = frase.split(' ');
  
 // Invertir cada palabra
 const palabrasInvertidas = palabras.map(palabra => {
   return palabra.split('').reverse().join('');
 });
 
 // Unir las palabras invertidas en una sola frase
 const fraseInvertida = palabrasInvertidas.join(' ');
 
 return fraseInvertida;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
    // Convertir el número a string
    const strNumero = numero.toString();
  
    // Invertir el string
    const strInvertido = strNumero.split('').reverse().join('');
    
    // Comparar el string original con el string invertido
    if (strNumero === strInvertido) {
      return "Es capicua";
    } else {
      return "No es capicua";
    }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  const set1 = new Set(array1);
  
  // Filtrar los elementos del segundo arreglo que están presentes en el conjunto del primer arreglo
  const interseccion = array2.filter(elemento => set1.has(elemento));
  
  return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
