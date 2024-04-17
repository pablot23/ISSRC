let saldoCuenta=20000;
let nomUsuario="Pepe";
let montoRetiro=1000;

if(montoRetiro > saldoCuenta){
    console.log(nomUsuario + " " + "tu saldo es insufisiente");
} else {
    console.log(nomUsuario + " " + "Tu saldo es suficiente");
}

let stockActual=saldoCuenta-montoRetiro;

console.log("El saldo de tu cuenta actual es: " + stockActual);