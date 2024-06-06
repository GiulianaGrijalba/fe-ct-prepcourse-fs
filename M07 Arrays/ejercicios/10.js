function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  return array.reduce((indiceMayor, elemento, indice, arr) => {
    if (elemento > arr[indiceMayor]) {
      return indice;
    }
    return indiceMayor;
  }, 0);
}


module.exports = encontrarIndiceMayor;
