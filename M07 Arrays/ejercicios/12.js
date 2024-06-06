function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  return arrayOfNums.reduce((suma, elemento) => suma + elemento, 0);
}

module.exports = agregarNumeros;
