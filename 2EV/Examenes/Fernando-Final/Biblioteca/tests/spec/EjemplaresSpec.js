describe("Ejemplares", function() {
    let ejemplar1;


    beforeEach(function() {
        ejemplar1 = new Ejemplares("estanteria 1", "Prestado");
    });

    it("Probar setEstado", () => {
        ejemplar1.setEstado("Extraviado");
        expect(ejemplar1.estado).toEqual("Extraviado");
    });
});