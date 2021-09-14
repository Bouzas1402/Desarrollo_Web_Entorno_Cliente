var numero1 = 4;
var numero2 = 9;
var frase = 'hola que tal estamos todos';

document.addEventListener("DOMContentLoaded", function(event){

    var resultado = frase.toUpperCase();

    document.getElementById("resultado").innerHTML = resultado.indexOf("Q");

    console.log(resultado[resultado.indexOf("Q")]);

});
// calcular factorial en casa
document.addEventListener(onclick, function (numero1, numero2) {
var resultado2 = numero1 + numero2;
document.getElementById("resultado2").innerHTML = resultado2;
});