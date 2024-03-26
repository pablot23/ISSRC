function contarCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter){
            contador++;
        }
        
    }
return contador;
}

let resultado = contarCaracteres("Martin es un niño", "i")
console.log(resultado); //salida:3