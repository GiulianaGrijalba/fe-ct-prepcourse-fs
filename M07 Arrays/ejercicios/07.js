function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  return array.map(elemento => {
    if (typeof elemento === 'string') {
      return elemento.toUpperCase();
    }
    return elemento;
  });
}

module.exports = convertirStringAMayusculas;

