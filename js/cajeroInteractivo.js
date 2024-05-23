//Cajero con interacción con funciones nativas de javaScript verificar si el monto a retirar 
//es suficiente , retroalimentar con

//let nomnre = "Pepe";
//let saldo=1000;
//let retiro=parseFloat(prompt("ingrese monto a retirar"))
//let result=saldo-retiro;

//if (saldo<retiro){
    //alert(nombre + "saldo insuficiente")
//}else {
        //alert("tenes saldo")
       // alert("tu saldo es: " + result)
//}

function mostrarmensaje(mensaje){
    alert (mensaje);
}

function retirarDinero(monto){
    if (monto > 0 && monto <= saldoCuenta){
    //saldoCuenta-=monto esto es igual a esto: saldoCuenta=saldoCuenta-monto
    saldoCuenta=saldoCuenta-monto;
    mostrarmensaje("mensajesssss") //crear un funcion
    } else if 
}

function iniciarCajero(){
let opcion;

do{
opcion = prompt("ingresar");
switch(opcion){
    case 1:
        let montoRetiro=parseInt(prompt("ingrese el valor a retirar: "))
    //funcion retirar dinero
    //retirarDinero()
    mostrarmensaje("otro mensajesssss");
    break;
}

}while(opcion !=4)

}