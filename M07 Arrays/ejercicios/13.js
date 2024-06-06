function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  if (resultadosTest.length === 0) {
    return 0;  // Retorna 0 si el arreglo está vacío para evitar dividir por cero.
  }
  
  const suma = resultadosTest.reduce((acumulador, nota) => acumulador + nota, 0);
  return suma / resultadosTest.length;
}

module.exports = promedioResultadosTest;
