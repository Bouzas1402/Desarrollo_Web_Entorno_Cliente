var Calendario = Calendario || {};


Calendario = function() {


    /**
     *  Private
     */
    var version = '1.0';

     function init () {

    }

    function calendario (mesInicio, mesFin, festivos) {
        var festivos = festivos;
        var calendario = "";
        var festivoActual = 0;
        /**
        * For para comprobar descartar los festivos que esten antes del mes de inicio que le introducimos.
        */
        let festivo = festivos[festivoActual].split("/");
        let fechaFestivo = new Date(festivo[2], (festivo[1]-1), (festivo[0]));
        for (var x = 0; x < festivos.length; x++){
            if ((festivo[1]-1) < mesInicio){
                festivoActual++;
                festivo = festivos[festivoActual].split("/");
                fechaFestivo = new Date(festivo[2], (festivo[1]-1), (festivo[0]));
            } else {
                x = festivos.length;
            }
        }

        /**
         * For que imprime todos los dias comprendidos entre mes de inicio y mes de fin. Si la fecha coincide con el primer festivo
         * colorea esa fila de la tabla y pasa al siguiente festivo aumentando la posicion del array festivo en uno
         */
        for (var i = mesInicio; i <= mesFin; i++) {
            for (var j = 1; j <= 31; j++) {
                let festivo = festivos[festivoActual].split("/");
                let fechaFestivo = new Date(festivo[2], (festivo[1]-1), (festivo[0]));
                var fecha = new Date(2021, i, j);
                    if (fechaFestivo.valueOf() == fecha.valueOf()){
                        calendario += "<tr><td style=\"border-color: red; color: red\">" + j + "</td><td style=\"border-color: red; color: red\">" + convertirMes(fecha.getMonth()) + "</td><td style=\"border-color: red; color: red\">" + convertirDia(fecha.getDay()) + " --> FESTIVO</td></tr>";
                        if (festivoActual < (festivos.length - 1)){
                            festivoActual++;
                        }
                        } else {
                            calendario += "<tr><td>" + j + "</td><td>" + convertirMes(fecha.getMonth()) + "</td><td>" + convertirDia(fecha.getDay()) + "</td></tr>";
                        }
            }
        }
    return calendario;
    }

    function convertirDia(dia) {
        switch (dia) {
            case 0:
                return "Sabado";
                break;
            case 1:
                return "Domingo";
                break;
            case 2:
                return "Lunes";
                break;
            case 3:
                return "Martes";
                break;
            case 4:
                return "Miercoles";
                break;
            case 5:
                return "Jueves";
                break;
            case 6:
                return "Viernes";
                break;
        }
    }

    function convertirMes(mes) {
        switch (mes) {
            case 0:
                return "Enero";
                break;
            case 1:
                return "Febrero";
                break;
            case 2:
                return "Marzo";
                break;
            case 3:
                return "Abril";
                break;
            case 4:
                return "Mayo";
                break;
            case 5:
                return "Junio";
                break;
            case 6:
                return "Julio";
                break;
            case 7:
                return "Agosto";
                break;
            case 8:
                return "Septiembre";
                break;
            case 9:
                return "Octubre";
                break;
            case 10:
                return "Noviembre";
                break;
            case 11:
                return "Diciembre";
                break;
        }
    }

    /**
     *  Ejecutable al cargar la pagina:
     */

    init();

    /**
     *  Public
     */

    return {
        version: function(){
            return version;
        }
        ,init : init
        ,calendario : calendario
    }
};