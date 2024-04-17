//entrada de datos
//let montoRetiro=50;
let saldoCuenta=20000;
let montoRetiro = prompt("Ingrese el monto a retirar:");
//proceso
const saldoDisp=saldoCuenta-montoRetiro;
//salida
//console.log("ingresar el monto a retirar: " + saldoDisp);

if (montoRetiro <= saldoCuenta) {
    // Actualizar el saldo de la cuenta
    saldoCuenta -= montoRetiro;
  
    // Mostrar el monto ingresado y el saldo actualizado
    alert("Monto ingresado: " + montoRetiro + "Saldo actual: " + saldoCuenta);
  } else {
    // Mostrar mensaje de saldo insuficiente
    alert("Saldo insuficiente no se puede realizar el retiro");
  }


/*// Definir variables
var nombreUsuario = "Juan";
var saldoCuenta = 1000;
var montoRetiro = prompt("Ingrese el monto a retirar:");

// Verificar si el saldo es suficiente
if (montoRetiro <= saldoCuenta) {
  // Actualizar el saldo de la cuenta
  saldoCuenta -= montoRetiro;

  // Mostrar el monto ingresado y el saldo actualizado
  alert("Monto ingresado: " + montoRetiro + "\nSaldo actual: " + saldoCuenta);
} else {
  // Mostrar mensaje de saldo insuficiente
  alert("Saldo insuficiente. No es posible realizar el retiro.");
}*/