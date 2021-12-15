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
        for (let i = 0; i < this.estaciones.length; i++) {
            if (this.estaciones[i].nombre === nombre){
                return this.estaciones[i];
            }
        }
        return null;
    }
}
/*
export var Lineas = [
    {
        "linea 1": {
            "color": "rojo",
            "paradas": [Estaciones[11], Estaciones[5], Estaciones[3], Estaciones[10], Estaciones[7], Estaciones[9]]
        }
    },
    {
        "linea 2": {
            "color": "azul",
            "paradas": [Estaciones[5], Estaciones[6], Estaciones[1], Estaciones[7], Estaciones[8]]
        }
    },
    {
        "linea 3": {
            "color": "naranja",
            "paradas": [Estaciones[0], Estaciones[1], Estaciones[2], Estaciones[3], Estaciones[4]]
        }
    }
];
    /*{
    "linea 1": {
        "color": "amarillo",
        "estaciones": []
    }},
    {"linea 2": {
        "color": "rosa",
        "estaciones": []
    }
    },
    {"linea 3": {
            "color": "rojo",
            "estaciones": []
        }
    },
    {"linea 4": {
            "color": "azul",
            "estaciones": []
        }
    },
    {"linea 5": {
            "color": "verde",
            "estaciones": []
        }
    },
    {"linea 6": {
            "color": "gris",
            "estaciones": []
        }
    },
    {"linea 7": {
            "color": "naranja",
            "estaciones": []
        }
    },
    {"linea 8": {
            "color": "gris",
            "estaciones": []
        }
    },
    {"linea 9": {
            "color": "marron",
            "estaciones": []
        }
    } */

