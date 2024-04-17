let numero1 = parseFloat(prompt("Ingresar un numero"));
let numero2 = parseFloat(prompt("Ingresar otro numero"));

if (isNaN(numero1) || isNaN(numero2))
{
document.write('Al menos uno de los dos valores ingresados no es numérico.');
}
else
{

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let mult = numero1 * numero2;
let div = numero1 / numero2;

alert("la suma es: " + suma);
alert("la resta es: " + resta);
alert("la multiplicacion  es: " + mult);
alert("la dicvision es: " + div);
}