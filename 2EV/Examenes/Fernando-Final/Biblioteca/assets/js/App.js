class App {

    constructor() {
        this.bibliotecas = [];
        this.screen = new Screen();
    }

    loadDatos(url){
        let datos;
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    datos = JSON.parse(req.responseText);
                    for (let i = 0; i < datos.length; i++) {
                        app.addBiblioteca(datos[i]["nombre"]);
                        for (let j = 0; j < datos[i]["inventario"].length; j++) {
                            let titulo = datos[i]["inventario"][j]["titulo"];
                            let imagen = datos[i]["inventario"][j]["imagen"];
                            let genero = datos[i]["inventario"][j]["genero"];
                            let descripcion = datos[i]["inventario"][j]["descripcion"];
                            let ISBN = datos[i]["inventario"][j]["ISBN"];
                            app.bibliotecas[i].addPublicacion(titulo, imagen, genero, descripcion, ISBN);

                            for (let k = 0; k < datos[i]["inventario"][j]["ejemplares"].length; k++) {
                                let ubicacion = datos[i]["inventario"][j]["ejemplares"][k]["ubicacion"];
                                let estado = datos[i]["inventario"][j]["ejemplares"][k]["estado"];
                                app.bibliotecas[i].inventario[j].addEjemplares(ubicacion, estado);
                            }
                        }
                    }
                    app.screen.dibujarCarousel(datos[0]["inventario"]);
                    console.log(app.bibliotecas[0].inventario)
                    app.screen.dataTable(app.bibliotecas[0].getEjemplares());
                    app.screen.dibujarInfoCard(app.bibliotecas[0].getEjemplares());
                    console.log(app.bibliotecas[0].getEjemplares())
                } else {
                    datos = "Error loading page\n";
                }
            }
        };
        req.send();
    }

    addBiblioteca(nombre){
        this.bibliotecas.push(new Biblioteca(nombre));
    }

    pintarCatalogo(){}

}