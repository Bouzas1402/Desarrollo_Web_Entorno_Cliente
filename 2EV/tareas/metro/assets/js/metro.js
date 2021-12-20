// const colores = ["red", "blue","yellow", "lime", "aqua", "fuchsia", "gray", "olive", "navy", "maroon", "green", "purple"];

class Metro {
    constructor(lineas) {
        this.nombre = "Metro madrid";
        this.lineas = [];
        lineas.forEach(linea => {
            let nuevaLinea = new Lineas(linea.nombre, linea.color, linea.estaciones);
            this.lineas.push(nuevaLinea);
        })
        this.printLineasBarra();
        this.printMetro(this.lineas[0].nombre);
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

    printMetro(lineaABuscar) {
        document.getElementById('paradas').innerHTML = "";
        const templateParadas = document.querySelector('#plantilla-estaciones').content;
        const lineas = new DocumentFragment();
        const parada = new DocumentFragment();
        parada.appendChild(document.importNode(templateParadas, true));
        let linea = this.getLinea(lineaABuscar);
        document.querySelector('#linea-titulo2').textContent = linea.nombre.replaceAll('-', ' ');
        linea.estaciones.forEach(estacion =>
        {
            parada.querySelector('.inner-circle').style.backgroundColor = linea.color;
            parada.querySelector('p').textContent = estacion.nombre.replaceAll('-', ' ');
            parada.querySelector('.boton-paradas').setAttribute('onclick', "metro.abrirModal('" + estacion.nombre + "');")
            lineas.appendChild(document.importNode(parada, true));
        })
        document.getElementById('paradas').appendChild(lineas);
    }

    printLineasBarra(){
        const templateParadas = document.querySelector('#plantilla-lineas-menu').content;
        const menuLineas = new DocumentFragment();
        const lineas = new DocumentFragment();
        lineas.appendChild(document.importNode(templateParadas, true));
        this.lineas.forEach(linea => {
            lineas.querySelector('button').textContent = linea.nombre;
            lineas.querySelector('button').style.backgroundColor = linea.color;
            lineas.querySelector('button').setAttribute('onclick', "metro.printMetro('" + linea.nombre + "');")
            menuLineas.appendChild(document.importNode(lineas, true));
        })
        document.getElementById('menu-lineas').appendChild(menuLineas);
    }

    abrirModal(estacion) {
        //
        document.getElementById('cuerpo-modal').innerHTML = "";
        //
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
        //
        const templateLineas = document.querySelector('#plantilla-lineas').content;
        const templateParadas = document.querySelector('#plantilla-estaciones').content;
        const templateOptions = document.querySelector('#plantilla-options').content;
        //
        const lineas = new DocumentFragment();
        const estaciones = new DocumentFragment();
        const options = new DocumentFragment();
        //
        const contenidoModal = new DocumentFragment();
        //
        lineas.appendChild(document.importNode(templateLineas, true));
        estaciones.appendChild(document.importNode(templateParadas, true));
        estaciones.querySelector('.inner-circle').innerHTML = "";
        options.appendChild(document.importNode(templateOptions, true));

        let marcador;
        caminos.forEach(camino => {
            lineas.querySelector('h2').style.fontSize = '50px';
            lineas.querySelector('h2').textContent = camino[0].replaceAll('-', ' ');
            lineas.querySelector('.estaciones-modal').id = camino[0]+camino[2];
            contenidoModal.appendChild(document.importNode(lineas, true));
            estaciones.querySelector('.inner-circle').style.backgroundColor = camino[1];
            marcador = 3;
            if (camino.length === 5) {
                estaciones.querySelector('p').textContent = camino[3].replaceAll('-', ' ');
                contenidoModal.querySelector('#' + camino[0]+camino[2]).appendChild(document.importNode(estaciones, true));
                marcador = 4;
            }
            estaciones.querySelector('p').textContent = camino[2].replaceAll('-', ' ');
            contenidoModal.querySelector('#' + camino[0]+camino[2]).appendChild(document.importNode(estaciones, true));
            estaciones.querySelector('p').textContent = camino[marcador].replaceAll('-', ' ');
            contenidoModal.querySelector('#' + camino[0]+camino[2]).appendChild(document.importNode(estaciones, true));
            options.querySelector('button').setAttribute('onclick', 'metro.calcularParadas("' + camino[0] + '");');
            options.querySelector('.input-datalist').setAttribute('list', camino[0] + 'select');
            options.querySelector('input').id = camino[0] + 'selectinput';
            options.querySelector('datalist').id = camino[0] + 'select';
            options.querySelector('datalist').setAttribute('list', camino[0] + 'select');
            options.querySelector('.parada-hidden').value = camino[2];
            options.querySelector('.parada-hidden').id = camino[0] + 'paradahidden';
            options.querySelector('.div-respuesta span').style.color = camino[1];
            options.querySelector('.div-respuesta').id = camino[0] + 'respuesta';
            this.getLinea(camino[0]).estaciones.forEach(estacion => {
                options.querySelector('datalist').innerHTML += "<option value='" + estacion.nombre + "'>";
            })
            contenidoModal.appendChild(document.importNode(options, true))
        })
        document.getElementById('modal').querySelector('.modal-body').appendChild(contenidoModal);
    }

    calcularParadas(lineaParada){
        let estacionComienzo = document.getElementById(lineaParada + 'paradahidden').value;
        let estacionDestino = document.getElementById(lineaParada + 'selectinput').value;

        let linea = this.getLinea(lineaParada);
        let indiceComienzo = 0;
        let indiceDestino = "No existe la parada";
        let respuesta = 0;
        for (let i = 0; i < linea.estaciones.length; i++) {
            if (linea.estaciones[i].nombre === estacionComienzo){
                indiceComienzo = i;
                break;
            }
        }
        for (let i = 0; i < linea.estaciones.length; i++) {
            if (linea.estaciones[i].nombre === estacionDestino){
                indiceDestino = i;
                break;
            }
        }
        if (estacionDestino === "") {
            respuesta = "Seleccione una parada";
        } else if (indiceComienzo === indiceDestino) {
            respuesta = "Ya está en el destino";
        } else if (indiceComienzo > indiceDestino) {
            respuesta = indiceComienzo - indiceDestino;
        }else if (indiceDestino > indiceComienzo) {
            respuesta = indiceDestino - indiceComienzo;
        } else  {
            respuesta = indiceDestino;
        }
        document.querySelector('#' + lineaParada + 'respuesta span').innerText = respuesta;
    }

    getLinea (linea){
        let lineaABuscar;
        this.lineas.forEach(metros => {
            if (metros.nombre === linea){
                lineaABuscar = metros;
            }
        })
        return lineaABuscar;
    }
    }


