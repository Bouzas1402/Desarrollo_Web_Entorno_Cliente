class Participante {

    constructor(nombreEquipo, marcador = 0) {
        this.equipo = nombreEquipo;
        this.marcador = this.crearMarcador();
    }


    crearMarcador(){
        return Math.floor(Math.random() * 6);
    }
}