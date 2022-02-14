class App {

    constructor(url) {
        this.torneos = [];
        this.screen = new Screen();

       // torneos.forEach(torneo, ()=>{
       //     let nuevoTorneo = new Torneo(torneo.nombre, torneo.deporte, torneo.rondas);
      //      this.torneos.push(nuevoTorneo);
    //    })
    }


    createTorneo(deporte, numParticipantes) {
        this.torneos.push(new Torneo(deporte, numParticipantes));
    }

    loadData(url){
        let datos;
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    datos = JSON.parse(req.responseText);
                } else {
                    datos = "Error loading page\n";
                }
            }
        };
        req.send();
        return datos;
    }


}