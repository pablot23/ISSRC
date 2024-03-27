function Estado(nota1, nota2, nota3) {
    // Verificar si las notas están dentro del rango válido
    if (nota1 < 1 || nota1 > 10) 
    {
      //return "Error: Las notas deben estar entre 1 y 10";
      console.log("Error: Las notas deben estar entre 1 y 10");
    }
      // Calcular el promedio de las notas
    let promedio = (nota1 + nota2 + nota3) / 3;
      // Determinar el estado del alumno según el promedio
    if (promedio < 4) {
      return "LIBRE";
    } else if (promedio < 7) {
      return "REGULAR";
    } else {
      return "PROMOCIONADO";
    }
  }
  
  // Ejemplo de uso
  let nota1 = 20;
  let nota2 = 10;
  let nota3 = 11;
  let estado = Estado(nota1, nota2, nota3);
  console.log("El estado del alumno es: " + estado);
  
/*function estado(nota) {
    if (nota < 1 || nota > 10) {
        console.log("error");
      
    } else if (nota < 4) {
      
      console.log("libre");
    } else if (nota < 7) {
      
      console.log("regulr");
    } else {
      
      console.log("promocoinado");
    }
  }
  console.log(estado(11));*/