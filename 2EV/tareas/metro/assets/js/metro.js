const colores = ["red", "blue","yellow", "lime", "aqua", "fuchsia", "gray", "olive", "navy", "maroon", "green", "purple"];

class Metro {
    constructor(lineas) {
        this.nombre = "Metro madrid";
        this.lineas = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = new Lineas(lineas[i].nombre, colores[i], lineas[i].estaciones);
            this.lineas.push(linea);
        }
        this.printMetro();
    }

    getEstacion(nombre){
        let estaciones = [];
        for (let i = 0; i < this.lineas.length; i++) {
            let estacion = this.lineas[i].getEstacion(nombre);
            if (estacion !== null && estacion !== undefined){
                estaciones.push(estacion);
            }
        }
        return estaciones;
    }

    printMetro() {
        let metro = "";
        const templateLineas = document.querySelector('#plantilla-metro').content;
        const templateParadas = document.querySelector('#plantilla-estaciones').content;
        const templateParada = document.querySelector('#plantilla-lineas').content;
        const lineas = new DocumentFragment();
        this.lineas.forEach(linea => {
                templateLineas.querySelector('h2').textContent = linea.nombre;
                lineas.appendChild(document.importNode(templateLineas, true));
                templateParada.querySelector('div').id = linea.nombre;
                lineas.appendChild(document.importNode(templateParada, true));
            linea.estaciones.forEach(estacion =>
                {
                    templateParadas.querySelector('.inner-circle').style.backgroundColor = linea.color;
                    templateParadas.querySelector('p').textContent = estacion.nombre;
                    templateParadas.querySelector('button').setAttribute('onclick', "metro.abrirModal('" + estacion.nombre + "');")
                    //templateParadas.querySelector('button').setAttribute('data-bs-target', '#'+ estacion.nombre);
                    lineas.getElementById(linea.nombre).appendChild(document.importNode(templateParadas, true));
                })
        })
        document.getElementById("metro").appendChild(lineas);
    }

    abrirModal(estacion){
        let caminos = [];
        this.lineas.forEach(linea => {
                linea.estaciones.forEach(parada =>
                    {
                        if (parada.nombre === estacion) {
                            caminos.push(parada.caminos);
                        }
                    })
        })
        console.log(caminos);
        const templateLineas = document.querySelector('#plantilla-metro').content;
        const templateParadas = document.querySelector('#plantilla-estaciones').content;
        const templateParada = document.querySelector('#plantilla-lineas').content;
        const contenidoModal = new DocumentFragment();
        caminos.forEach(camino => {



            contenidoModal.appendChild(document.importNode(templateParada, true));
            camino.forEach(llegada => {
                templateParadas.querySelector('p').textContent = llegada.destino;
                contenidoModal.appendChild(document.importNode(templateParadas, true));

            })
        })
        document.getElementById('modal').querySelector('.modal-body').appendChild(contenidoModal);
    };

    cerrarModal(){
        let borrar = document.getElementById('cuerpo-modal');
        let elementoBorrar = document.getElementsByTagName("aos-init");
        //borrar.removeChild(borrar.childNodes);
       // document.querySelector('#cuerpo-modal').remove();
    }

    }





// getStacion (nombreStacion) return caminos que conectan