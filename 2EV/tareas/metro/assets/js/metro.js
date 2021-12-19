// const colores = ["red", "blue","yellow", "lime", "aqua", "fuchsia", "gray", "olive", "navy", "maroon", "green", "purple"];

class Metro {
    constructor(lineas) {
        this.nombre = "Metro madrid";
        this.lineas = [];
        lineas.forEach(linea => {
            let nuevaLinea = new Lineas(linea.nombre, linea.color, linea.estaciones);
            this.lineas.push(nuevaLinea);
        })
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
        const templateLineas = document.querySelector('#plantilla-lineas').content;
        const templateParadas = document.querySelector('#plantilla-estaciones').content;
        const lineas = new DocumentFragment();
        this.lineas.forEach(linea => {
                templateLineas.querySelector('h2').textContent = linea.nombre;
                templateLineas.querySelector('.aos-animate').id = linea.nombre;
                lineas.appendChild(document.importNode(templateLineas, true));
                linea.estaciones.forEach(estacion =>
                    {
                        templateParadas.querySelector('.inner-circle').style.backgroundColor = linea.color;
                        templateParadas.querySelector('p').textContent = estacion.nombre;
                        templateParadas.querySelector('button').setAttribute('onclick', "metro.abrirModal('" + estacion.nombre + "');")
                        lineas.getElementById(linea.nombre).appendChild(document.importNode(templateParadas, true));
                    })
        })
        document.getElementById("metro").appendChild(lineas);
    }

    abrirModal(estacion) {
        document.getElementById('cuerpo-modal').innerHTML = "";
        document.querySelector('.modal-title').innerHTML = estacion;
        const caminos = [];
        let contador = 0;
        this.lineas.forEach(linea => {
                linea.estaciones.forEach(parada =>
                    {
                        if (parada.nombre === estacion) {
                            caminos.push([linea.nombre, linea.color, parada.nombre]);
                            parada.caminos.forEach(camino => {
                                caminos[contador].push(camino.destino);
                            })
                            contador++;
                        }
                    })
        })
        const templateLineas = document.querySelector('#plantilla-lineas').content;
        const templateParadas = document.querySelector('#plantilla-estaciones').content;
        const contenidoModal = new DocumentFragment();
        let marcador;
        caminos.forEach(camino => {
            templateLineas.querySelector('h2').style.fontSize = '50px';
            templateLineas.querySelector('h2').textContent = camino[0];
            templateLineas.querySelector('.aos-animate').id = camino[0]+camino[2];
            contenidoModal.appendChild(document.importNode(templateLineas, true));
            templateParadas.querySelector('.inner-circle').innerHTML = "";
            templateParadas.querySelector('.inner-circle').style.backgroundColor = camino[1];
            marcador = 3;
            if (camino.length === 5) {
                templateParadas.querySelector('p').textContent = camino[3];
                contenidoModal.querySelector('#' + camino[0]+camino[2]).appendChild(document.importNode(templateParadas, true));
                marcador = 4;
            }
            templateParadas.querySelector('p').textContent = camino[2];
            contenidoModal.querySelector('#' + camino[0]+camino[2]).appendChild(document.importNode(templateParadas, true));
            templateParadas.querySelector('p').textContent = camino[marcador];
            contenidoModal.querySelector('#' + camino[0]+camino[2]).appendChild(document.importNode(templateParadas, true));
        })
        document.getElementById('modal').querySelector('.modal-body').appendChild(contenidoModal);
    }
    }
