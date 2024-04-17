let saldoCuenta=20000;
let nomUsuario="Pepe";

let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar: "));

if(montoRetiro > saldoCuenta){
    //console.log(nomUsuario + " " + "tu saldo es insufisiente");
    alert(nomUsuario + " " + "tu saldo es insufisiente");
} else {
    //console.log(nomUsuario + " " + "Tu saldo es suficiente");
    alert(nomUsuario + " " + "Tu saldo es suficiente");
}

let stockActual=saldoCuenta-montoRetiro;

//console.log("El saldo de tu cuenta actual es: " + stockActual);
alert("El saldo de tu cuenta actual es: " + stockActual);





//alert("Cliente " + usuario + " Usted está retirando: $" + montoRetiro + ". Su saldo actual es de: $ " + saldoCuenta);