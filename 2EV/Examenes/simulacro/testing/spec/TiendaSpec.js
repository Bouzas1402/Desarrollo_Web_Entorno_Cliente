describe("Tienda", function (){
    var tienda;
    var gasto1;
    var gasto2;

    beforeEach(function() {
        tienda = new Tienda("TiendaPepe");
        gasto1 = new Gasto('12/02/2021', 98.7, 'gasto');
        gasto2 = new Gasto('06/07/2022', 65.7, 'compra');
    });

    it('Crear tienda', () => {

        expect((new Tienda("TiendaPepe")).nombre).toBe("TiendaPepe");
        expect((new Tienda("TiendaPepe")).gastos).toBeTruthy([]);

    });

    it('Crear gasto y comprobar que se pueden extraer', () => {
        let gasto1Array = {fecha: '12/02/2021', importe: 98.7,concepto: 'gasto'};
        let gasto2Array = {fecha: '06/07/2022', importe: 65.7,concepto: 'compra'};
        tienda.addGasto(gasto1Array);
        tienda.addGasto(gasto2Array);
        expect(tienda.gastos).toContain(gasto1);
        expect(tienda.gastos).toContain(gasto2);

        expect(tienda.getGastos()).toBe(98.7);

    })

});