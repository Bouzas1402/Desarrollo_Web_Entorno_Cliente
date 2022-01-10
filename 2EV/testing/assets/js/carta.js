class Carta {
    constructor(nombre, caracteristicas){
        this.nombre = nombre;
        this.caracteristicas = [];
        let nuevasCaracteristicas = new Caracteristicas(caracteristicas.vida, caracteristicas.puntuacion, caracteristicas.fuerza);
        this.caracteristicas.push(nuevasCaracteristicas);

    }
}