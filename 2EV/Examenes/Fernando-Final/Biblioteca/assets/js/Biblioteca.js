class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.inventario = [];
    }

    addPublicacion(titulo, imagen, genero, ISBN){
        this.inventario.push(new Publicacion(titulo, imagen, genero, ISBN));
    }
}