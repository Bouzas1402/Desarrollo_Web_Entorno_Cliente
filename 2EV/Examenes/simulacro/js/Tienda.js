class Tienda {

    constructor(nombre) {
        this.nombre = nombre;
        this.gastos = [];
    }

    addGasto (gasto){
        let nuevoGasto = new Gasto(gasto.fecha, gasto.importe, gasto.concepto);
        this.gastos.push(nuevoGasto);
    }

    addGastoFaker(concepto){
        let nuevoGasto = new Gasto(faker.date.past(), faker.datatype.float(), concepto);
        this.gastos.push(nuevoGasto);
    }

    getGastos(){
        let gasto = [];
        for (let i = 0; i < this.gastos.length; i++) {
            if (this.gastos[i].getGastoPorConcepto('gasto')) {
                gasto.push(this.gastos[i].importe);
            }
        }
        let gastoTotal = 0;
        for (let i = 0; i < gasto.length; i++) {
            gastoTotal += parseFloat(gasto[i]);
        }
        return gastoTotal;
    }
    getRecaudacion(){
        let gasto = 0;
        for (let i = 0; i < this.gastos.length; i++) {
            if (this.gastos[i].getGastoPorConcepto('gasto')) {
                gasto -= this.gastos[i].importe;
            } else if (this.gastos[i].getGastoPorConcepto('compra')) {
                gasto -= this.gastos[i].importe;
            } else if (this.gastos[i].getGastoPorConcepto('venta')) {
                gasto += this.gastos[i].importe;
            }
        }
        return gasto;
    }
}