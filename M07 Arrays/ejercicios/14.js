function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  
  if (arguments.length === 0) {
    return 0;  // Retorna 0 si no se pasan argumentos.
  }
  
  if (arguments.length === 1) {
    return arguments[0];  // Retorna el único argumento si solo se pasa uno.
  }

  let producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  return producto;
}

module.exports = multiplicarArgumentos;
