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
    function estadoMaizSilo(estadoMaiz) {
      if (estadoMaiz === "" || estadoMaiz === null || estadoMaiz!="E" && estadoMaiz!="H" && estadoMaiz!="N") {
          alert("Opción inválida. Por favor, ingrese E si el maíz tiene cuerpo extraño, H si tiene humedad o N si no tiene.");
          return;
      }

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


    gestionarStock();