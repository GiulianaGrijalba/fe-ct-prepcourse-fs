function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // Usa el método Math.random() para generar un índice aleatorio.
  let indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;


