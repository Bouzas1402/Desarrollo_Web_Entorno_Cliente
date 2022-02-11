class Gasto {
    constructor(fecha, importe, concepto) {
        this.fecha = fecha;
        this.importe = importe;
        this.concepto = concepto;
    }

    getGastoPorConcepto(concepto){
        if (this.concepto === concepto){
            return this.concepto;
        }
    }
}