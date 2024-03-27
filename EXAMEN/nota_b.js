//let nota = prompt("Ingresar tu nota: ");

/*function estado(nota) {
        if (nota < 4) {
            console.log("libre");
    } else if (nota < 7) {
      console.log("regular");
          } else {
            console.log("promocoinado");
    }
  }
  console.log(estado(6)); */

  function estado(nota) {
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
  console.log(estado(11));