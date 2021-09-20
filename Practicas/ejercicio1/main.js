var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function printTable(arrayItems, idTable) {
    var filaTabla = "";

    for (var i = 0; i < arrayItems.length; i++) {
        filaTabla += "<tr><td>" + arrayItems[i] + "</td></tr>";
        document.getElementById(idTable).innerHTML = filaTabla;
    }
}