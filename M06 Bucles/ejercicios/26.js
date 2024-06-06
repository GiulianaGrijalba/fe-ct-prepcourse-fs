function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  
 // Eliminamos los espacios en blanco y convertimos a minúsculas
 let str1SinEspacios = str1.replace(/\s/g, "").toLowerCase();
 let str2SinEspacios = str2.replace(/\s/g, "").toLowerCase();

 // Convertimos los strings a arrays, los ordenamos y los convertimos nuevamente a strings
 let str1Ordenado = str1SinEspacios.split("").sort().join("");
 let str2Ordenado = str2SinEspacios.split("").sort().join("");

 // Comparamos los strings ordenados
 return str1Ordenado === str2Ordenado;
}

module.exports = esAnagrama;
