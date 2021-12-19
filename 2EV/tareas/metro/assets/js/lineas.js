class Lineas {
    constructor(nombre, color, estaciones) {
        this.nombre = nombre;
        this.color = color;
        this.estaciones = [];
        for (let i = 0; i < estaciones.length; i++) {
            let estacion = new Estaciones(estaciones[i])
            if (i > 0) {
                let camino = new Camino(estaciones[i -1], 1, this.nombre);
                estacion.addCamino(camino);
            }
            if (i < estaciones.length - 1) {
                let camino = new Camino(estaciones[i + 1], 1, this.nombre);
                estacion.addCamino(camino);
            }
            this.estaciones.push(estacion)
        }
    }

    getEstacion(nombre){
        this.estaciones.forEach(estacion => {
            if (estacion.nombre === nombre){
                return estacion;
            }
        })
        return null;
    }
}

