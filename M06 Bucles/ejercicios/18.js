function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a > b) {
    return "El primer número debe ser menor o igual al segundo";
  }

  var producto = 1;
  if (a <= 0 && b >= 0) {
    for (var i = a; i <= b; i++) {
      producto *= i;
    }
  } else if (a < 0 && b < 0) {
    for (var i = a; i >= b; i--) { // Cambio de i++ a i--
      producto *= i;
    }
  } else {
    for (var i = a; i <= b; i++) {
      producto *= i;
    }
  }

  // Verificar si el producto es -0 y convertirlo a 0
  if (Object.is(producto, -0)) {
    producto = 0;
  }

  return producto;
}


module.exports = productoEntreNúmeros;