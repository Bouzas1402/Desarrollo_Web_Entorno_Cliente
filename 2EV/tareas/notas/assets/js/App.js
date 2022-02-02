class App {
    constructor() {
        this.cursos = [];
    }

    sacarDatos() {
        let datos;
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/data-courses.json");
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    app.rellenarCursos(JSON.parse(req.responseText));
                } else {
                    datos = "Error loading page\n";
                }
            }
        };
        req.send();
    }

    rellenarCursos(datos) {
        for (let i = 0; i < datos.length; i++) {
            for (let j = 0; j < datos[i].capacidad; j++) {
                datos[i].estudiantes.push(faker.name.findName());
            }
            for (let j = 0; j < Object.keys(datos[i].calificaciones).length - 1; j++) {
                for (let k = 0; k < datos[i].capacidad; k++) {
                    let notaEstudiante = {nombre: datos[i].estudiantes[k], nota: app.notaAleatoria()}
                    Object.values(datos[i].calificaciones)[j].push(notaEstudiante);
                }
            }
            for (let k = 0; k < datos[i].capacidad; k++) {
                let notaFinal = Math.round((Object.values(datos[i].calificaciones)[2][k].nota + Object.values(datos[i].calificaciones)[1][k].nota + Object.values(datos[i].calificaciones)[0][k].nota) / 3);
                let notaEstudiante = {nombre: datos[i].estudiantes[k], nota: notaFinal}
                Object.values(datos[i].calificaciones)[3].push(notaEstudiante);
            }
        }
        this.cursos = datos;
    }

    pintarComienzo() {
        for (let i = 0; i < this.cursos.length; i++) {
            app.generarDivCanvas(this.cursos[i], true);
            app.pintarBarraLateral(this.cursos[i]);
           }
    }

    graficaNotaAlumno(curso){
        let datosNota = [];
        let datosAlumnos = [];
        for (let j = 0; j < curso.capacidad; j++) {
            datosNota.push(Object.values(curso.calificaciones)[3][j].nota);
            datosAlumnos.push(Object.values(curso.calificaciones)[3][j].nombre);
        }
        const contexto = document.getElementById(curso.curso);
        const myChart = new Chart(contexto, {
            type: 'bar',
            data: {
                labels: datosAlumnos,
                datasets: [{
                    label: ' - Nota Final',
                    data: datosNota,
                    backgroundColor: function (context) {
                        var index = context.dataIndex;
                        var value = context.dataset.data[index];
                        return value < 5 ? 'rgba(239,101,101,0.93)' :
                            value >= 5 && value < 8 ? 'rgba(166,180,238,0.88)' :
                                'rgba(187,245,175,0.78)';
                    },
                    borderColor: function (context) {
                        var index = context.dataIndex;
                        var value = context.dataset.data[index];
                        return value < 5 ? 'rgb(182,0,0)' :
                            value >= 5 && value < 8 ? 'rgb(0,19,159)' :
                                'rgb(42,194,1)';
                    },
                    borderWidth: 2
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    text: curso.curso
                },
                scales: {
                    y: {
                        max: 10,
                        beginAtZero: true
                    }
                }
            }
        });

    }
    graficaNotaMedia(curso){
        let datosNota = [];
        let datosAlumnos = [];
        for (let j = 0; j < curso.capacidad; j++) {
            datosNota.push(Object.values(curso.calificaciones)[3][j].nota);
            datosAlumnos.push(Object.values(curso.calificaciones)[3][j].nombre);
        }
            let suspensos = 0;
            let aprobados = 0;
            let sobresalientes = 0;

            for (let i = 0; i < datosNota.length; i++) {
                if (datosNota[i] < 5) {
                    suspensos++;
                } else if (datosNota[i] >= 5 && datosNota[i] < 8) {
                    aprobados++;
                } else if (datosNota[i] >= 8) {
                    sobresalientes++;
                }
            }
            const contexto = document.getElementById(curso.curso + '-media');
            const myChart1 = new Chart(contexto, {
                type: 'bar',
                data: {
                    labels: ['Suspensos', 'Aprobados', 'Sobresalientes'],
                    datasets: [{
                        label: ' - Nota Media',
                        data: [suspensos, aprobados, sobresalientes],
                    backgroundColor: [
                        'rgba(239,101,101,0.93)',
                        'rgba(166,180,238,0.88)',
                        'rgba(187,245,175,0.78)'
                    ],
                    borderColor: [
                        'rgb(182,0,0)',
                        'rgb(0,19,159)',
                        'rgb(42,194,1)'
                    ],
                    borderWidth: 2
                    }]
                },
                options: {
                    title: {
                        display: true,
                        position: 'top',
                        text: 'Aprobados'
                    }
                }
            });
        }

    pintarBarraLateral(curso){
        const template = document.querySelector('#lista-cursos').content;
        const listaCursos = new DocumentFragment();
        listaCursos.appendChild(document.importNode(template, true));
        listaCursos.querySelector('span').textContent = curso.curso;
        document.querySelector('#sidebar-nav').appendChild(listaCursos);
    }


    generarDivCanvas(curso, boolean){
        const template = document.querySelector('#div-canvas').content;
        const divCanvas = new DocumentFragment();
        divCanvas.appendChild(document.importNode(template, true));
        divCanvas.querySelector('.card-title').childNodes[0].before(curso.curso);
        let tablaAlumnosNota = document.createElement("canvas");
        if (boolean === false){
            tablaAlumnosNota.id = curso.curso;
        } else if (boolean === true){
            tablaAlumnosNota.id = curso.curso + '-media';
        }
        divCanvas.querySelector('.chart-container').appendChild(tablaAlumnosNota);
        document.getElementById('graficos').appendChild(divCanvas);
        if (boolean === false){
            app.graficaNotaAlumno(curso);
        } else if (boolean === true){
            app.graficaNotaMedia(curso);
        }
    }

    notaAleatoria(){
        return faker.datatype.float({min: 1, max: 10, precision: .1});
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }


}