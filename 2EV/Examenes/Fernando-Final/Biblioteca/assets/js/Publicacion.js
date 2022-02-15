class Publicacion {

    constructor(titulo, imagen, genero, ISBN) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.genero = genero;
        this.ISBN = ISBN;
        this.ejemplares = [];
    }

    addEjemplares(ubicacion, estado){
        this.ejemplares.push(new Ejemplares(ubicacion, estado));
    }

}