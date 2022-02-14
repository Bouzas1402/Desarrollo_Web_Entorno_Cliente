class Partido {

    constructor() {
        this.participantes = [];
    }

    crearParticipante(nombreEquipo, marcador){
        this.participantes.push(new Participante(nombreEquipo, marcador));
    }



}