let lado1 = 5;
let lado2 = 5;
let lado3 = 3;

if ((lado1==lado2) && (lado1==lado3)) {     // && es Y //
    console.log("El Triangulo es Equilatero");
} else {
    if ((lado1==lado2) || (lado2==lado3)) {     // || es O //
        console.log("El Triangulo es Isosceles");
    } else {
        console.log("El Triangulo es Escaleno");
    }
}


/*Algoritmo Diferentes_tipos_de_Triangulos
	
	definir lado1, lado2, lado3 Como Entero
	
	Escribir "ingresar el primer lado"
	leer lado1
	Escribir "ingresar el segundo lado"
	leer lado2
	Escribir "ingresar el tarcer lado"
	leer lado3
	
	si (lado1==lado2) y (lado1==lado3) Entonces
		Escribir "El Triangulo es Equilatero"
	SiNo
		si(lado1==lado2) o (lado2==lado3) Entonces
			Escribir "El Triangulo es Isosceles"
		sino
			escribir "El Triangulo es Escaleno"
		FinSi
		
	FinSi
	
FinAlgoritmo */

/*// Definir las variables lado1, lado2 y lado3 con las longitudes de los lados del triángulo
let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

// Utilizar la estructura de casos para determinar el tipo de triángulo
switch (true) {
  case lado1 === lado2 && lado2 === lado3:
    console.log("El triángulo es equilátero");
    break;
  case lado1 === lado2 || lado1 === lado3 || lado2 === lado3:
    console.log("El triángulo es isósceles");
    break;
  default:
    console.log("El triángulo es escaleno");
    break;
}
*/

/*let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

let tipoTriangulo = lado1 === lado2 && lado2 === lado3 ? "equilátero" : lado1 === lado2 || lado1 === lado3 || lado2 === lado3 ? "isósceles" : "escaleno";

console.log("El triángulo es " + tipoTriangulo);*/

