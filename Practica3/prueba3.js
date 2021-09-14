var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

function printTable(arrayItems, idTable){
    var filaTabla = "";

    for (var i = 0; i < meses.length; i++){
filaTabla += "<tr><td>" + meses[i] + "</td></tr>"
document.getElementById(idTable).innerHTML = filaTabla;
    }

  //  document.getElementById(idTable).innerHTML = rowTable;

}

document.addEventListener("DOMContentLoaded", function(event) {
printTable(meses, "meses")
});