function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  return array.filter(elemento => typeof elemento === 'number' && elemento > 10).length;
}

module.exports = contarElementosMayoresA10;
