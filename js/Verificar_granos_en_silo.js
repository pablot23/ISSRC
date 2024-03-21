
    let StockActual = 0;
    
    let MaizIngresado = Number(prompt("Ingrese la cantidad de maíz que va a cargar al silo: "));
    StockActual = StockActual + MaizIngresado;
        
    let MaizDescargado = Number(prompt("Ingrese la cantidad de maíz que va a descargar del silo: "));
    
    if (MaizDescargado <= StockActual) {
        StockActual = StockActual - MaizDescargado;
        
        alert("Hay maíz en stock en el silo.");
    } else {
        alert("No hay suficiente maíz en stock en el silo.");
    }
    
    alert("El stock actualizado de maíz en el silo es: " + StockActual);


//controlStockSilo();


/* Algoritmo Calculo_de_granos_en_silo
	//Problema: El recibidor de granos de la Cooperativa La Perdedora, hará la apertura de la cosecha 
	//con un ingreso de Maíz de 3000 toneladas. Necesito ver si en el silo hay maíz en stock y que 
	//luego de descarga me informe el stock actualizado.
	
	Definir StockActual, MaizIngresado, MaizDescargado como Entero //variables
    
    StockActual = 0 						//estado de stock
    
    Escribir "Ingrese la cantidad de maíz que va a cargar al silo:" //ingresar cantidad de granos 
    Leer MaizIngresado
    
    StockActual = StockActual + MaizIngresado		//calculo de acuerdo a la cantidad ingresada se actualiza el stock
    
    Escribir "Ingrese la cantidad de maíz que va a descargar del silo:" //cuanto se quiere retirar
    Leer MaizDescargado
    
    Si MaizDescargado <= StockActual 	//se actualiza el stock 
		Entonces
        StockActual = StockActual - MaizDescargado	//se compara y se verifica si hay suficiente grano
        Escribir "Hay maíz en stock en el silo."
    Sino
        Escribir "No hay suficiente maíz en stock en el silo."
	FinSi
	
	Escribir "El stock actualizado de maíz en el silo es:", StockActual  //muestra cuanto queda aun en el silo
		

FinAlgoritmo
 */