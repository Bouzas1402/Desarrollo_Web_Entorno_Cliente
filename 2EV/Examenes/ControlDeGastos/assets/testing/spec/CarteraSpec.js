describe("Cartera", function (){
    var usuario;

        it('it create it add new gasto to carte and create new if necesary', () => {

            var gasto = {
                "nombre": "Pepe",
                "fecha":"12/02/2021",
                "importe":"",
                "concepto":""
            };

            var cartera = new Cartera("Cartera de pruebas");
            cartera.addGasto(gasto);

            expect(cartera.usuarios.length).toBe(1);
            expect(cartera.gastos.length).toBe(1);
        });

});