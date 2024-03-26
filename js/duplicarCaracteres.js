function duplicarCaracteres(cadena) {
    let nuevaCadena = '';
  
    for (let i = 0; i < cadena.length; i++) {
      nuevaCadena += cadena[i] + cadena[i];
    }
  
    return nuevaCadena;
  }
  
  console.log(duplicarCaracteres('Hola')); // Resultado: HHoollaa
  console.log(duplicarCaracteres('JavaScript')); // Resultado: JJaavvaaSSccrriipptt
  