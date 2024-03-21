function esPrimo(numero) {
   /* verifica si el número es menor o igual a 1 Si es así, se retorna false
    xq los núm < o = a 1 no son primos */
    if (numero <= 1) { 
      return false;
    }
    /*bucle desde 2 hasta el número anterior al número dado Si el número es divisible  
    por algún número en ese rango, se retorna false. Si el bucle termina sin encontrar 
    ningún divisor, se retorna true, lo que significa que el número es primo.*/
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false

