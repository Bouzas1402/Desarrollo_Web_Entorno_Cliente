describe("Biblioteca", function() {
    let biblioteca1;


    beforeEach(function() {
        biblioteca1 = new biblioteca1("Santos de la Humosa");
    });

    it("Probar addPublicacion", () => {

        biblioteca1.addPublicacion("Platero y yo", "imagen", "Novela", "Cuento corto", "1231234345551");
        expect(biblioteca1.inventario).toEqual([new Publicacion("Platero y yo", "imagen", "Novela", "Cuento corto", "1231234345551")]);

    });

});