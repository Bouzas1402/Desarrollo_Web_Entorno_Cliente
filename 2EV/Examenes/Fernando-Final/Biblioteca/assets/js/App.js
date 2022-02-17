class App {

    constructor() {
        this.bibliotecas = [];
        this.screen = new Screen();
    }

    loadDatos(url) {
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
                    /*  app.screen.dibujarCarousel(app.bibliotecas[0].inventario);
                      console.log(app.bibliotecas[0].inventario)
                      app.screen.dataTable(app.bibliotecas[0].getEjemplares());
                      app.screen.dibujarInfoCard(app.bibliotecas[0].getEjemplares());
                      console.log(app.bibliotecas[0].getEjemplares()) */
                    app.screen.pintarBarraLateral(app.bibliotecas[0].inventario);
                } else {
                    datos = "Error loading page\n";
                }
            }
        };
        req.send();
    }

    addBiblioteca(nombre) {
        this.bibliotecas.push(new Biblioteca(nombre));
    }

    dibujarDashboard() {
        document.querySelector('section .row').innerHTML = "";
        this.screen.dibujarCarousel(app.bibliotecas[0].inventario);
        this.screen.dibujarInfoCard(app.bibliotecas[0].getEjemplares());
        this.screen.dataTable(app.bibliotecas[0].getEjemplares());
        this.pintarSemicirculo();
    }

    dibujarFormulario() {
        document.querySelector('section .row').innerHTML = "";
        this.screen.dibujarFormulario();
    }

    dibujarLibro(nombre) {
        this.screen.dibujarLibro(this.bibliotecas[0].getLibroPorNombre(nombre));
    }

    cambiarEstado(ubicacion) {
        let ejemplares = this.bibliotecas[0].getEjemplares();
        for (let i = 0; i < ejemplares.length; i++) {
            if (ejemplares[i].ubicacion === ubicacion) {
                ejemplares[i].setEstado('Prestado');
                app.dibujarDashboard();
                console.log(app.bibliotecas[0].getEjemplares());
                break;
            }
        }
    }


    pintarSemicirculo() {
        const templateSemicirculo = document.querySelector('#template-chart-semicirculo').content;
        const semicirculo = new DocumentFragment();
        semicirculo.appendChild(document.importNode(templateSemicirculo, true));
        document.querySelector('section .row').appendChild(semicirculo);
        let contexto = document.querySelector('#semicirculoChart');
        this.screen.semicirculoChart(contexto, this.bibliotecas[0].getEjemplares())
    }

    loadDatosFake() {
        let generos = ['Ensayo', 'Novela', 'Poesia']
        let estados = ['Prestado', 'Descatalogado', 'Disponible', 'Extraviado']
        app.addBiblioteca(faker.name.findName());
        for (let i = 0; i < faker.datatype.number({min: 1, max: 6}); i++) {
            let titulo = faker.random.word(faker.datatype.number({min: 2, max: 8}));
            let imagen = faker.image.animals(200, 480, true);
            let genero = generos[faker.datatype.number({min: 0, max: 2})];
            let descripcion = faker.lorem.lines(faker.datatype.number({min: 3, max: 7}));
            let ISBN = faker.phone.phoneNumber('#############');
            app.bibliotecas[0].addPublicacion(titulo, imagen, genero, descripcion, ISBN);
            for (let j = 0; j < faker.datatype.number({min: 3, max: 8}); j++) {
                let ubicacion = faker.system.mimeType();
                let estado = estados[faker.datatype.number({min: 0, max: 4})];
                app.bibliotecas[0].inventario[i].addEjemplares(ubicacion, estado);
            }
        }
    }



}