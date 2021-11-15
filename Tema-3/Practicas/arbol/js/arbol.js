// una forma de crear un objeto:

var Arbol = {
    nombre : "",
    dia : 0,
    hora : 0,
    vida : 100,
    edad : 0,
    agua : 0,
    flores : [],

    init : function (nombre){
        this.nombre = nombre;
        this.vida = 100;
        this.edad = 0;
        this.agua = 0;
        this.flores = [];
        this.print();
    },

    print : function (){
        var representacionArbol = "<h1>Dia:" + this.dia + " hora: " + this.hora + "</h1>";
        representacionArbol += "<h1>" + this.nombre + "</h1>";
        representacionArbol += this.printImgArbol();
        representacionArbol += "<h1>Edad: " + this.edad + "</h1>";
        representacionArbol += "<h1>vida: " + this.vida + "</h1>";
        representacionArbol += "<h1>agua: " + this.agua + "</h1>";
        document.getElementById("arbol").innerHTML = representacionArbol;
    },

    printImgArbol : function(){
        var arbol = "";
        if (this.edad < 10){
            arbol = "img/arbol-joven.jpg";
        }  else if (this.edad >= 10 && this.edad <= 20){
            arbol = "img/arbol.jpg";
        } else {
            arbol = "img/arbol-en-flor.jpg";
        }
        if (this.vida <= 0) {
            arbol = "img/arbol-viejo.jpg";
        }
        return "<img src='" + arbol + "' height='200' width='200'>"
    },

    crece : function (){
        this.edad++;
        if (this.agua <= 0 ){
            this.vida--;
        } else {
            this.agua -= 10;
        }
        this.print();
    },

    pasarHora : function (){
        this.hora++;
        if (this.hora >= 24){
            this.hora = 0;
            this.pasarDia();
        }
        this.print();
    },

    pasarDia : function (){
        this.dia++;
        this.crece();
    },

    regar : function (){
        this.agua += 20;
    },

    florecer : function (){
        if(this.flores.length){}
    }



}