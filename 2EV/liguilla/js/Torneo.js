class Torneo {

    constructor(deporte, numParticipantes) {
        this.deporte = new Deporte(deporte, numParticipantes);
        this.equipos = [];
        this.rondas = [];
    }

    addEquipos(equipo){ this.equipos.push(equipo); }

    addRonda(ronda){ this.ronda = ronda; }

    createRonda() {
        let ronda = new Rondas();
        for (let i = 0; i < this.equipos.length; i++) {
            const equipo = this.equipos[i];
            let rival = null;
            if(this.equipos[i+1]){
                rival = this.equipos[i+1];
                i++;
            }
            let partido = new Partido();
            partido.crearParticipante(equipo);
            partido.crearParticipante(rival);
            ronda.cratePartido(partido);
        }
        this.rondas.push(ronda);
    }

}