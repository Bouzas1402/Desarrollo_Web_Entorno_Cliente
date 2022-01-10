class Mazo {

    constructor(cartas){
        this.cartas = [];
        cartas.forEach(carta => {
            let nuevaCarta =  new Carta(carta.nombre, carta.caracteristicas);
            this.cartas.push(nuevaCarta);
        })
    }
}