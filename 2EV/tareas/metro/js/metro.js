class Metro {
    constructor(lineas) {
        this.nombre = "Metro madrid";
        this.lineas = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = new Lineas(lineas[i].nombre, lineas[i].estaciones);
            this.lineas.push(linea);
        }
    }
    getEstacion(nombre){
        let estaciones = [];
        for (let i = 0; i < this.lineas.length; i++) {
            let estacion = this.lineas[i].getEstacion(nombre);
            if (estacion !== null && estacion !== undefined){
                estaciones.push(estacion);
            }
        }
        return estaciones;
    }


}
// getStacion (nombreStacion) return caminos que conectan