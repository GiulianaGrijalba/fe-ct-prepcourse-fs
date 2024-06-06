function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

    // Crear un conjunto para almacenar elementos únicos
    let elementosUnicos = new Set();
  
    // Iterar sobre el array de números
    for (let num of numeros) {
      // Si el elemento ya está en el conjunto, significa que es repetido y lo retornamos
      if (elementosUnicos.has(num)) {
        return num;
      }
      // Si no, agregamos el elemento al conjunto
      elementosUnicos.add(num);
    }
  
    // Si no se encontró ningún elemento repetido, retornamos null
    return null;
  }


module.exports = encontrarElementoRepetido;