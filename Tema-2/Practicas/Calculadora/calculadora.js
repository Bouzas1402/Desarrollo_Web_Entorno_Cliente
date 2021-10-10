var Calculadora = Calculadora || {};

Calculadora = function()
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

    function printButtons(operador)
    {
        var boton = '<button onclick="document.getElementById(\'resultado\').innerHTML = Calculadora.' + operador + '(document.getElementById(\'op1\').value, document.getElementById(\'op2\').value)">' + operador.toUpperCase() + '</button>';
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
    ,printButtons : printButtons
    }
};