describe("Usuario", function (){
    var usuario;


    it('ir crear usuario', () => {
        usuario = new Usuario("Pepe", "Bouzas");
        expect(usuario.nombre).toBe("Pepe");
        expect(usuario.apellido).toBe("Bouzas");
    });

});