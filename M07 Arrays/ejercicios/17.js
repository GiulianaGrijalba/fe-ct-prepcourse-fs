function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const tabla = Array.from({ length: 11 }, (_, i) => i * 6);
  return tabla;
}

module.exports = tablaDelSeis;
