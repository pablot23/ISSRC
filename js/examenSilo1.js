let stockInicial = 0;
let recepcionCamion = 3000;
let siloExtranio = 2;
let siloHumedad = 3;
let extranio = 0;
let humedad = 0;

function mostrarStock() {
    alert(`El stock actual es: ${stockInicial}`);
}

function recibirCarga() {
    stockInicial += recepcionCamion;
    alert(`Stock actualizado: ${stockInicial}`);
}

function estadoMaizSilo(estadoMaiz) {
    if (estadoMaiz === "E") {
        extranio += 1;
        alert(`El maíz tiene cuerpo extraño, redirigiendo al silo ${siloExtranio} y son ${extranio} descargas de camion de cuerpo extraño.`);
    } else if (estadoMaiz === "H") {
        humedad += 1;
        alert(`El maíz tiene humedad, redirigiendo al silo ${siloHumedad} y son ${humedad} descargas de camion de humedad.`);
    } else {
        alert("El maíz no tiene nada.");
    }
}

function actualizarStock() {
    alert(`Informando al personal de la cooperativa:
    - Stock: ${stockInicial}
    - Silo de cuerpos extraños: ${siloExtranio}
    - Silo de humedad: ${siloHumedad}`);
}
function verificacion(){
  let seguridad= parseInt(prompt("ingrese 1 si no esta en condiciones o 2 si lo esta: "));
  if(seguridad==1){
      alert("no esta en condiciones de recibir la carga informando al personal");
  }
  else{
      if(seguridad==2){
          recibirCarga();
      }
      
  }
}

function mostrarMenu() {
    let opcion = prompt(`
    Menú:
    1. Mostrar stock actual
    2. Recibir carga de maíz
    3. Estado del maíz y redirigir al silo correspondiente
    4. Actualizar stock y notificar al personal
    5. Salir
    
    Seleccione una opción (1-5):`);
    return opcion;
}   



function gestionarStock() {
    let opcion;
    do {
        opcion = mostrarMenu(); 
        switch (opcion) {
            case "1":
                mostrarStock();
                break;
            case "2":
                verificacion();   
                break;
            case "3":
                let estado = prompt("Ingrese E si el maíz tiene cuerpo extraño, H si tiene humedad o N si no tiene:");
                estadoMaizSilo(estado.toUpperCase());
                
                break;
            case "4":
                actualizarStock();
                break;
            case "5":
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción inválida. Por favor, seleccione una opción válida (1-5).");
        }
    } while (opcion !== "5");
}


/*// Paso 1: Verificación del stock actual
let stockActual = consultarStockActual();

// Paso 2: Recepción del maíz
let maizDescargado = recibirMaiz();

// Paso 3: Actualización del stock de maíz
actualizarStockMaiz(stockActual, maizDescargado);

// Paso 4: Informar al personal de la cooperativa
informarStockActualizado(stockActual);

// Funciones auxiliares
function consultarStockActual() {
  // Aquí debes implementar la lógica para consultar el stock actual del silo correspondiente a maíz.
  // Puedes utilizar una base de datos, una API o cualquier otro método para obtener el stock actual.
  // Por ejemplo:
  let stockActual = 2500; // Supongamos que el stock actual es de 2500 toneladas
  return stockActual;
}

function recibirMaiz() {
  // Aquí debes implementar la lógica para recibir las 3000 toneladas de maíz del camión transportador.
  // Puedes utilizar un formulario, un input o cualquier otro método para ingresar la cantidad de maíz recibido.
  // Por ejemplo:
  let maizRecibido = 3000; // Supongamos que se recibieron 3000 toneladas de maíz
  return maizRecibido;
}

function actualizarStockMaiz(stockActual, maizRecibido) {
  // Aquí debes implementar la lógica para actualizar el stock de maíz en el sistema de gestión de inventarios.
  // Puedes utilizar una base de datos, una API o cualquier otro método para realizar la actualización.
  // Por ejemplo:
  let stockActualizado = stockActual + maizRecibido;
  return stockActualizado;
}

function informarStockActualizado(stockActualizado) {
  // Aquí debes implementar la lógica para informar al personal de la cooperativa sobre el stock actualizado de maíz.
  // Puedes utilizar una alerta, una notificación o cualquier otro método para mostrar el mensaje.
  // Por ejemplo:
  alert(`El stock actualizado de maíz es de ${stockActualizado} toneladas.`);
}
  



/*const silo = {
    stockInicial: 0,
    recepcionCamion: 3000,
    siloExtranio: 2,
    siloHumedad: 3,
    extranio:0,
    humedad:0,
}

function mostrarStock() {
    console.log(`El stock actual es: ${silo.stockInicial}`);
}

function recibirCarga() {
    silo.stockInicial += silo.recepcionCamion;
    console.log(`Stock actualizado: ${silo.stockInicial}`);
}

function estadoMaizSilo(estadoMaiz) {
    if (estadoMaiz === "E") {
        silo.extranio += 1;
        console.log(`El maíz tiene cuerpo extraño, redirigiendo al silo ${silo.siloExtranio} y son ${silo.extranio} descargas de camion de cuerpo extraño.`);
    } else if (estadoMaiz === "H") {
        silo.humedad += 1;
        console.log(`El maíz tiene humedad, redirigiendo al silo ${silo.siloHumedad} y son ${silo.humedad} descargas de camion de humedad.`);
    } else {
        console.log("El maíz no tiene nada.");

    }
}


function actualizarStock() {
    console.log(`Informando al personal de la cooperativa:
    - Stock: ${silo.stockInicial}
    - Silo de cuerpos extraños: ${silo.siloExtranio}
    - Silo de humedad: ${silo.siloHumedad}`);
}


function mostrarMenu() {
    console.log(`
    Menú:
    1. Mostrar stock actual
    2. Recibir carga de maíz
    3. Estado del maíz y redirigir al silo correspondiente
    4. Actualizar stock y notificar al personal
    5. Salir
    `);
}


function gestionarStock() {
    let opcion;
    do {
        mostrarMenu();
        opcion = prompt("Seleccione una opción (1-5):");
        switch (opcion) {
            case "1":
                mostrarStock();
                break;
            case "2":
                recibirCarga();
                break;
            case "3":
                let estado = prompt("Ingrese E si el maíz tiene cuerpo extraño, H si tiene humedad o N si no tiene:");
                estadoMaizSilo(estado.toUpperCase());
                break;
            case "4":
                actualizarStock();
                break;
            case "5":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida (1-5).");
        }
    } while (opcion !== "5");
}

gestionarStock();




/*let StockActual = 0;
    
let MaizIngresado = Number(prompt("Ingrese la cantidad de maíz que va a cargar al silo: "));
StockActual = StockActual + MaizIngresado;
    
let MaizDescargado = Number(prompt("Ingrese la cantidad de maíz que va a descargar del silo: "));

if (MaizDescargado <= StockActual) {
    StockActual = StockActual - MaizDescargado;
    
    alert("Hay maíz en stock en el silo.");
} else {
    alert("No hay suficiente maíz en stock en el silo.");
}

alert("El stock actualizado de maíz en el silo es: " + StockActual);*/


/*let stockActual = 0;

function verificarStock() {
    alert(`El stock actual de maíz es: ${stockActual} toneladas.`);
}

function recibirMaiz() {
    let estadoMaiz = prompt(`Ingrese el estado del maíz (E para cuerpos extraños, H para humedad, cualquier otra tecla para buen estado):`);
    if (estadoMaiz === 'E') {
        alert(`El maíz tiene cuerpos extraños. Se dirigirá al silo 2.`);
    } else if (estadoMaiz === 'H') {
        alert(`El maíz tiene humedad. Se dirigirá al silo 3.`);
    } else {
        stockActual += 3000;
        alert(`El maíz está en buen estado. Se ha recibido la carga de 3000 toneladas. El nuevo stock es: ${stockActual} toneladas.`);
    }
}

function informarPersonal() {
    alert(`Se ha informado al personal sobre el nuevo stock de maíz.`);
}

let repetir = true;
while (repetir) {
    verificarStock();
    recibirMaiz();
    informarPersonal();
    repetir = confirm('¿Desea recibir más maíz?');
}



/*let maizDescargado = 3000; // Toneladas de maíz descargadas

// Verificar el estado del maíz y dirigirlo al silo correspondiente
if (tieneCuerposExtranos(maizDescargado)) {
  dirigirASiloDos(maizDescargado);
} else if (tieneHumedad(maizDescargado)) {
  dirigirASiloTres(maizDescargado);
} else {
  // El maíz cumple con los estándares de calidad y se puede dirigir al silo principal
  dirigirASiloPrincipal(maizDescargado);
}

// Paso 3: Actualización del stock
// Sumar la cantidad de maíz descargado al stock actual
stockActual += maizDescargado;

// Informar el estado actual del silo a los usuarios
informarEstadoSilo(stockActual);

// Comunicar el nuevo stock de maíz al personal de la cooperativa
comunicarNuevoStock(stockActual);


// Paso 1: Verificación del stock actual
function verificarStock() {
  // Consultar el stock actual del silo correspondiente a cereal maíz
  // Código para consultar el stock actual del silo
}

// Paso 2: Recepción del maíz
function recibirMaiz(cantidad, calidad) {
  // Asegurarse de que el maíz descargado cumpla con los estándares de calidad establecidos por la cooperativa
  if (calidad === 'bueno') {
    // Verificar el estado del maíz y dirigirlo al silo correspondiente
    // Si tiene cuerpos extraños, debe ir a un silo dos (2) reservado para este fin
    // Si tiene humedad, debe ir a silo tres (3) reservado para tal fin
    // Código para dirigir el maíz al silo correspondiente
  } else {
    // Informar al personal superior sobre la calidad del maíz
    // Código para informar sobre la calidad del maíz
  }
}

// Paso 3: Actualización del stock
function actualizarStock(cantidad) {
  // Sumar la cantidad de maíz descargado al stock actual
  // Código para actualizar el stock de maíz en el sistema de gestión de inventarios
  // Informar el estado actual del silo a los usuarios
  // Comunicar el nuevo stock de maíz al personal de la cooperativa, incluyendo gerentes, supervisores y operadores del silo
}

// Llamadas a las funciones
verificarStock();
recibirMaiz(3000, 'bueno');
actualizarStock(3000); */
