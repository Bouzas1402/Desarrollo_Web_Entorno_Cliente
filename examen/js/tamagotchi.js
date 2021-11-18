var Tamagotchi = {
    nombre : "",
    vida : 0,
    hambre: 0,
    suenho: 0,
    felicidad: 0,
    dia: 0,
    hora: 0,

    init (){
        this.nombre = prompt("Introduzca un nombre");
        this.vida = 100;
        this.hambre = 100;
        this.suenho = 0;
        this.felicidad = 0;
        this.print();
    },

    print(){
        var representacionTamagotchi = "<h1>Dia:" + this.dia + " hora: " + this.hora + "</h1>";
        representacionTamagotchi += "<h1>" + this.nombre + "</h1>";
        representacionTamagotchi += "<h1>Vida: " + this.vida + "</h1>";
        representacionTamagotchi += "<h1>Hambre: " + this.hambre + "</h1>";
        representacionTamagotchi += "<h1>Sueño: " + this.suenho + "</h1>";
        representacionTamagotchi += "<h1>Felicidad: " + this.felicidad + "</h1>";
        representacionTamagotchi += "<img src='img/tamagotchi.png' height='200' width='200'>";
        document.getElementById("tamagotchi").innerHTML = representacionTamagotchi;
    },

    pasarHora(){
        this.hora++;
        if (this.hora >= 24){
            this.hora = 0;
            this.pasarDia();
        }
        this.print();
    },

    pasarDia(){
        this.dia++;
        this.hambre -= 10;
        this.suenho += 20;
        if (this.hambre <= 0){
            this.vida--;
        }
        if (this.suenho >= 100){
            this.vida--;
        }

        if (this.hambre >= 50 && this.suenho < 50) {
            this.felicidad++;
        } else if (this.hambre <= 20 && this.suenho < 70) {
            this.felicidad--;
        }
        this.print()
    },

    comer(){
      this.hambre += 20;
    },

    dormir(){
      this.suenho -= 40;
    },

}