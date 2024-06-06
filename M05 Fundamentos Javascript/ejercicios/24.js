function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:
// Verificamos si y es 0 para evitar la división por cero
if (y === 0) {
  return "No se puede dividir por cero";
} else {
  return x / y;
}
}

module.exports = divide;