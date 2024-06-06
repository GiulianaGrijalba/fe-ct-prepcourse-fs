function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  
    // Verificamos si la entrada es una cadena de longitud 1
    if (typeof letra === 'string' && letra.length === 1) {
      // Convertimos la letra a minúscula para simplificar la comparación
      letra = letra.toLowerCase();
      // Verificamos si la letra es una vocal
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return "Es vocal";
      } else {
        return "Dato incorrecto";
      }
    } else {
      return "Dato incorrecto";
    }
  }

module.exports = esVocal;
