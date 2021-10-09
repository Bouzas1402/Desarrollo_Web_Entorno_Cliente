var Calendario = Calendario || {};


Calendario = function() {


    /**
     *  Private
     */
    var version = '1.0';

     function init () {
        let festivos = ["11/10/2021", "12/10/2021"];

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
        ,convertirDia : convertirDia
        ,convertirMes : convertirMes
    }
};