var Calcular= Calcular || {};

Calcular = function()
{
    /**
     *  Private
     */
    var version = '1.0';

    function init()
    {
    }

    function suma(a, b)
    {
        return parseInt(a) + parseInt(b);
    }
    function resta(a, b)
    {
        return parseInt(a) - parseInt(b);
    }
    function factorial(a, b)
    {
        return parseInt(a) % parseInt(b);
    }
    function multiplicacion(a, b)
    {
        return parseInt(a) * parseInt(b);
    }
    function division(a, b)
    {
        return parseInt(a) / parseInt(b);
    }

    function  calcularElMayor (a, b){
        if(parseInt(a) > parseInt(b)) {
            return "El numero mayor es " + a;
        } else if (parseInt(b) > parseInt(a)) {
            return "El numero mayor es " + b;
        } else {
            return "El numero " + a + " y el numero " + b + " son iguales.";
        }
    }

    function printButtons(operador)
    {
        var boton = '<button onclick="document.getElementById(\'resultado\').innerHTML = Calcular.' + operador + '(document.getElementById(\'op1\').value, document.getElementById(\'op2\').value)">' + operador.toUpperCase() + '</button>';
        return boton;
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
        ,suma: suma
        ,resta: resta
        ,factorial: factorial
        ,multiplicacion: multiplicacion
        ,division: division
        ,calcularElMayor: calcularElMayor
        ,printButtons : printButtons
    }
};