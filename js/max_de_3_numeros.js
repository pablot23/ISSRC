 	/*let a = Number(prompt("Ingresa el primer número: "));
    let b = Number(prompt("Ingresa el segundo número: "));
    let c = Number(prompt("Ingresa el tercer número: "));

    if (a > b && a > c) {
        alert("El número mayor es: " + a);
    } else {
        if (b > a &&  b > a) {
        alert("El número mayor es: " + b);
		}else {
        alert("El número mayor es: " + c);
    }
}
    
    alert("El stock actualizado de maíz en el silo es: " + StockActual);*/

   /*Algoritmo CalcularMaximoTresNumeros
	Definir a, b, c Como Entero
	Escribir 'Ingresa el primer número:'
	Leer a
	Escribir 'Ingresa el segundo número:'
	Leer b
	Escribir 'Ingresa el tercer número:'
	Leer c
	Si a>b Y a>c Entonces
		Escribir 'El número mayor es:', a
	SiNo
		Si b>a Y b>c Entonces
			Escribir 'El número mayor es:', b
		SiNo
			Escribir 'El número mayor es:', c
		FinSi
	FinSi
    FinAlgoritmo*/


/*otra forma ver revisar:*/

function calcularmaximotresnumeros() {
	var a = new Number();
	var b = new Number();
	var c = new Number();
	document.write("Ingresa el primer número:", '<BR/>');
	a = Number(prompt());
	document.write("Ingresa el segundo número:", '<BR/>');
	b = Number(prompt());
	document.write("Ingresa el tercer número:", '<BR/>');
	c = Number(prompt());
	if (a>b && a>c) {
		document.write("El número mayor es:", a, '<BR/>');
	} else {
		if (b>a && b>c) {
			document.write("El número mayor es:", b, '<BR/>');
		} else {
			document.write("El número mayor es:", c, '<BR/>');
		}
	}
}