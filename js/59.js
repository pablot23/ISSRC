
let hora = 13; 


if (hora >= 12 && hora < 18) {

  console.log("Buenas Tardes");

} else if (hora >= 0 && hora < 12) {

  console.log("Buenos días");

} else {

  console.log("Buenas noches");

}

/* let hora = prompt("ingrese una hora en formato 24hs")
if(hora>=6 && hora <=12){
  console.log()
}
*/

/*const hora = new Date().getHours();

const saludo = hora < 12 ? 'Buenos días' : (hora < 18 ? 'Buenas tardes' : 'Buenas noches');

console.log(saludo);*/
