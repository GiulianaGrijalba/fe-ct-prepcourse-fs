// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {};
propiedad1: {
    propiedadAnidada1: 'valor1',
    propiedadAnidada2: 'valor2',
  },
  propiedad2: {
    propiedadAnidada3: 'valor3',
    propiedadAnidada4: 'valor4',
  },
  obtenerValorAnidado: function() {
    return this.propiedad1.propiedadAnidada1;
  }



module.exports = objetoAnidado;
