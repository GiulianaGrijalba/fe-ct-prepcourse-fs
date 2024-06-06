function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  // Eliminamos los espacios en blanco y convertimos a minúsculas
  let stringSinEspacios = string.replace(/\s/g, "").toLowerCase();
  // Invertimos el string
  let stringInvertido = "";
  for (let i = stringSinEspacios.length - 1; i >= 0; i--) {
    stringInvertido += stringSinEspacios[i];
  }
  // Comparamos el string original con el invertido
  return stringSinEspacios === stringInvertido;
}

module.exports = esPalindromo;
