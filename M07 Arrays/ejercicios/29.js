function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

    // Si el arreglo es vacío, retornar null
    if (numeros.length === 0) {
      return null;
    }
  
    // Encontrar el valor mínimo y máximo en el arreglo
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);
  
    // Iterar desde el mínimo hasta el máximo para encontrar el número faltante
    for (let i = min; i <= max; i++) {
      if (!numeros.includes(i)) {
        return i; // Retorna el primer número faltante encontrado
      }
    }
  
    // Si no se encuentra ningún número faltante, retornar null
    return null;
  }
  

module.exports = encontrarNumeroFaltante;