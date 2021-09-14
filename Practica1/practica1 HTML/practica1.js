alert("Adios");

document.addEventListener("DOMContentLoaded", function(event) {
   document.getElementById("titulo").innerHTML = "Este es el titulo"; 
});

function pintaTituloRojo(id){
        document.getElementById(id).setAttribute("class","tituloRojo");
}

function pintaTituloAzul(id){
    document.getElementById(id).setAttribute("class","tituloAzul");
}

function muestraClase(id){
    var clase = document.getElementById(id).getAttribute("class");
    console.groupCollapsed(clase);
}
