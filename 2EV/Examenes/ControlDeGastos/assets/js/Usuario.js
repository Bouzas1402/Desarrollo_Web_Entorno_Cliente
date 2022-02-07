class Usuario {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.gastos = [];
    }

    addGastos(gasto){
        this.gastos.push(gasto);

    }

}