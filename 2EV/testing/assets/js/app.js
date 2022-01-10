class App {



    crearBaraja(baraja){
        let nuevoMazo = new Mazo(baraja);
        this.mazo = nuevoMazo;
    }

    crearJugadores(num){
        this.jugadores = [];
        for (let i = 0; i < num; i++) {
            let nuevoJugador = new Jugador(i);
            this.jugadores.push(nuevoJugador);
        }
    }

    jugarPartida(){

        let cartasDesordenadas = this.mezclarBaraja(this.mazo.cartas);
        let numeroJugadores = this.jugadores.length;

        for (let i = 0; i < cartasDesordenadas.length; i++) {
            for (let j = 0; j < numeroJugadores; j++) {

            }

            if ((i % 2) === 0){

            }
        }
        console.log(cartasDesordenadas);
        console.log(numeroJugadores);
        console.log(this.mazo.cartas);

    }

    mezclarBaraja(array){
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

}