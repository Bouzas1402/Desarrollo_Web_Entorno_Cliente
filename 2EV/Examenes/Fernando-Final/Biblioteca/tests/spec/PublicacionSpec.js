describe("Publicaciones", function() {
    let publicacion1;

    beforeEach(function() {
        publicacion1 = new Publicacion("Platero y tu", "imagen", "Novela", "Buen libro", "123243");
    });

    it("Probar addEjemplares", () => {
        publicacion1.addEjemplares("Estanteria 1", "Extraviado");
        expect(publicacion1.ejemplares[0]).toEqual(new Ejemplares("Estanteria 1","Extraviado"));
    });

    it("Probar getEjemplares", () =>{
        publicacion1.ejemplares.push(new Ejemplares("Estanteria 765","Ocupado"));
        expect(publicacion1.getEjemplares()).toEqual([new Ejemplares("Estanteria 765","Ocupado")]);
    })
});