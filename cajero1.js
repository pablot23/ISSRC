let usuario = prompt('Ingrese su nombre de usuario')
let saldoCuenta=20000;
let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
const saldoDisp=saldoCuenta-montoRetiro;
if (montoRetiro <= saldoCuenta) {

saldoCuenta -= montoRetiro;
  
alert("Cliente " + usuario + " Usted está retirando: $" + montoRetiro + ". Su saldo actual es de: $ " + saldoCuenta);
alert('La operación se realizó con éxito. Usted retiró: $' + montoRetiro );
} else {

alert("Saldo insuficiente no se puede realizar el retiro");
}