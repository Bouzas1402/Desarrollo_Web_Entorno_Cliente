var Bisiestos = Bisiestos || {};

Bisiestos = function()
{
    /**
     *  Private
     */
    var version = '1.0';

    function init() {

    }

    function calcularBisiesto(ano){
        if (((ano % 4) === 0 && (ano % 100) !== 0) || ((ano % 4) === 0 && (ano % 100) === 0 && (ano % 400) === 0)) {
            return ano + " es año bisiesto";
        } else  {
            return ano + "No es un año bisiesto";
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
        ,init: init
        ,calcularBisiesto: calcularBisiesto
    }
};