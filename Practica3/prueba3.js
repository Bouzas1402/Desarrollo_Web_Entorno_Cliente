var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function printTable(arrayItems, idTable){
    var filaTabla = "";

    for (var i = 0; i < arrayItems.length; i++){
filaTabla += "<tr><td>" + arrayItems[i] + "</td></tr>";
document.getElementById(idTable).innerHTML = filaTabla;
    }

  //  document.getElementById(idTable).innerHTML = rowTable;

}

// Al hacer el ejercicio esta linea queda inservible ya que el evento surge por 
// un click de boton y no por como indica "DomContentLoaded" despues de la carga del DOM
/* document.addEventListener("DOMContentLoaded", function(event) {
printTable(meses, "meses")
}); */