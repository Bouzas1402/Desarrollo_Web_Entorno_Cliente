class Publicacion {

    constructor(titulo, imagen, genero, descripcion, ISBN) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.genero = genero;
        this.descripcion = descripcion;
        this.ISBN = ISBN;
        this.ejemplares = [];
    }

    addEjemplares(ubicacion, estado){
        this.ejemplares.push(new Ejemplares(ubicacion, estado));
    }
    getEjemplares(){
        return this.ejemplares;
    }



}