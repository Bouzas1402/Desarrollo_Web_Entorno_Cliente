describe("Publicaciones", function() {
    let publicacion1;

    beforeEach(function() {
        publicacion1 = new Publicacion("Platero y tu", "imagen", "Novela", "Buen libro", "123243");
    });

    it("Probar addEjemplares", () => {
        publicacion1.addEjemplares("Estanteria 1", "Extraviado");
        expect(ejemplar1.ejemplares[0].estado).toEqual("Extraviado");
    });
});