const producto= "monitor 20 pulgadas":
const precio = 30000;

console.log(producto.length); muestra los espacios
console.log(producto.indexOf("pulgadas")); //muestra la posicion en este caso inicia desde la p
console.log(producto.trimstart("pulgadas")); //saca el espacio en blanco que esta en el inicio de la oracion
console.log(producto.slice(0,10));//muestra en este caso de 0 a 10
console.log(producto.replace("a","W"));//reeemplaza la primer letra por la segunda tambien se puede usar el replaceAll reeemplaza todo las a
console.log(producto.substring(5,12));//
