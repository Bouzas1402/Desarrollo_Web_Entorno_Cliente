class Metro {
    constructor() {
        this.nombre = "Metro Valencia";
        this.lineas = [];
        let datos;
        var req = new XMLHttpRequest();
        req.open('GET', "assets/json/lineas.json");
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    datos = JSON.parse(req.responseText);
                    metro.crearLineas(datos);
                    metro.printLineasBarra();
                    metro.printMetro(metro.lineas[0].nombre);
                } else {
                    datos = "Error loading page\n";
                }
            }
        };
        req.send();
    }

    crearLineas(datos){
        for (let i = 0; i < datos.length; i++) {
            let nuevaLinea = new Lineas(datos[i].nombre, datos[i].color, datos[i].estaciones);
            this.lineas.push(nuevaLinea);
        }
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

    abrirModal(estacionComienzo) {
        document.getElementById('cuerpo-modal').innerHTML = "";
        document.querySelector('.modal-title').innerHTML = estacionComienzo.replaceAll('-', ' ');
        const caminos = [];
        let contador = 0;

        this.lineas.forEach(linea => {
            for (let j = 0; j < linea.estaciones.length; j++) {
                if (linea.estaciones[j].nombre === estacionComienzo) {
                    caminos.push([linea.nombre, linea.color, estacionComienzo]);
                    linea.estaciones[j].caminos.forEach(camino => {
                        caminos[contador].push(camino.destino);
                    })
                    contador++;
                    break;
                }
            }
        })

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
            options.querySelector('datalist').innerHTML = "";
            this.getLinea(camino[0]).estaciones.forEach(estacion => {
              if (estacion.nombre !== estacionComienzo) {
                  options.querySelector('datalist').innerHTML += "<option value='" + estacion.nombre + "'>";
              }
            })
            contenidoModal.appendChild(document.importNode(options, true))
        })
        document.getElementById('modal').querySelector('.modal-body').appendChild(contenidoModal);
    }

    calcularParadas(lineaParada){
        let estacionComienzo = document.getElementById(lineaParada + 'paradahidden').value;
        let estacionDestino = document.getElementById(lineaParada + 'selectinput').value;

        let indiceComienzo = 0;
        let indiceDestino = "No existe la parada o no está en esta linea";
        let respuesta = 0;
        let linea = this.getLinea(lineaParada);
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


