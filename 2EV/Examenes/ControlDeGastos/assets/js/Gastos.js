class Gastos{

    constructor(usuario, fecha, importe, concepto) {
        this.usuario = usuario;
        this.fecha = fecha;
        this.importe = importe;
        this.concepto = concepto;
    }


    getUsuario(){
        return this.usuario;
    }
}