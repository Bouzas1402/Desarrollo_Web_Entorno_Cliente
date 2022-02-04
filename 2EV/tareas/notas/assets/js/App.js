class App {
    constructor() {
        this.cursos = [];
    }

    sacarDatos() {
        let req = new XMLHttpRequest();
        req.open('GET', "assets/data/data-courses.json");
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    app.rellenarCursos(JSON.parse(req.responseText));
                } else {
                    console.log("Error loading page\n");
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
        app.pintarTodosLosCursos(true);
        app.pintarBarraLateral();
    }

    pintarTodosLosCursos(boolean){
        document.getElementById('graficos').innerHTML = "";
        for (let i = 0; i < this.cursos.length; i++) {
            app.generarDivCanvas(this.cursos[i].curso, boolean, 4);
        }
    }

    graficaNotaAlumno(curso, trimestre, contexto){
        let datosNota = [];
        let datosAlumnos = [];
        for (let j = 0; j < curso.capacidad; j++) {
            datosNota.push(Object.values(curso.calificaciones)[trimestre - 1][j].nota);
            datosAlumnos.push(Object.values(curso.calificaciones)[trimestre - 1][j].nombre);
        }
        const myChart = new Chart(contexto, {
            type: 'bar',
            data: {
                labels: datosAlumnos,
                datasets: [{
                    label: ' - Nota Final',
                    data: datosNota,
                    backgroundColor: function (context) {
                        let index = context.dataIndex;
                        let value = context.dataset.data[index];
                        return value < 5 ? 'rgba(239,101,101,0.93)' :
                            value >= 5 && value < 8 ? 'rgba(166,180,238,0.88)' :
                                'rgba(187,245,175,0.78)';
                    },
                    borderColor: function (context) {
                        let index = context.dataIndex;
                        let value = context.dataset.data[index];
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

    graficaNotaMedia(curso, trimestre, contexto){
        let datosNota = [];
        let datosAlumnos = [];
        for (let j = 0; j < curso.capacidad; j++) {
            datosNota.push(Object.values(curso.calificaciones)[trimestre - 1][j].nota);
            datosAlumnos.push(Object.values(curso.calificaciones)[trimestre - 1][j].nombre);
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
            const myChart = new Chart(contexto, {
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

    pintarBarraLateral(){
        for (let i = 0; i < this.cursos.length; i++) {
            const template = document.querySelector('#lista-cursos').content;
            const listaCursos = new DocumentFragment();
            listaCursos.appendChild(document.importNode(template, true));
            listaCursos.querySelector('span').textContent = this.cursos[i].curso;
            listaCursos.querySelector('a').setAttribute('data-bs-target', "#modal-" + this.cursos[i].curso);
            listaCursos.querySelector('ul').id = "modal-" + this.cursos[i].curso;
            for (let j = 0; j < 4; j++) {
                let trimestre = '<li><button type="button" onClick="app.elegirCurso(\'' + this.cursos[i].curso + '\', true, ' + (j + 1) + ')" className="w-100">' + (j + 1) + 'º Trimestre</button></li>';
                listaCursos.querySelector('ul').innerHTML += trimestre;
            }
            document.querySelector('#sidebar-nav').appendChild(listaCursos);
        }
    }

    // Si en el segunda valor se intruduce true se dibujara la grafica de la nota media del curso, si se marca false se dibujara la de todos los alumnos
    generarDivCanvas(curso, boolean, trimestre){
        const template = document.querySelector('#div-canvas').content;
        const divCanvas = new DocumentFragment();
        divCanvas.appendChild(document.importNode(template, true));
        divCanvas.querySelector('.card-title').childNodes[0].before(curso);
        divCanvas.querySelector('.card-title>span').textContent += trimestre + "º Trimestre";

        divCanvas.querySelector('.cambiar-filtro').innerText = 'Alumnos';
        divCanvas.querySelector('.cambiar-filtro').setAttribute('onclick', "app.cambiarFiltro('" + curso + "', " + trimestre + ", false);");

        let tablaAlumnosNota = document.createElement("canvas");

        if (boolean === false){
            divCanvas.querySelector('.chart-container').id = curso;
        } else if (boolean === true){
            divCanvas.querySelector('.chart-container').id = curso + "-media";

        }
        divCanvas.querySelector('.chart-container').appendChild(tablaAlumnosNota);
        document.getElementById('graficos').appendChild(divCanvas);
        let cursoDibujar = app.getCursoPorNombre(curso);
        if (boolean === false){
            let contexto = document.getElementById(curso).getElementsByTagName('canvas');
            app.graficaNotaAlumno(cursoDibujar, trimestre, contexto);
        } else if (boolean === true){
            let contexto = document.getElementById(curso + "-media").getElementsByTagName('canvas');

            app.graficaNotaMedia(cursoDibujar, trimestre, contexto);
        }
    }

    elegirCurso(curso, boolean, trimestre){
        document.getElementById('graficos').innerHTML = "";
        app.generarDivCanvas(curso, boolean, trimestre);
    }

    cambiarFiltro(nombeCurso, trimestre, boolean){
        let curso = app.getCursoPorNombre(nombeCurso);
        let contexto = document.getElementById(nombeCurso + "-media");
        contexto.innerHTML = "";
        let canvas = document.createElement("canvas");
        contexto.appendChild(canvas);
        contexto = contexto.getElementsByTagName('canvas');
        if (boolean === false){
            app.graficaNotaAlumno(curso,trimestre,contexto);
        } if (boolean === true){
            app.graficaNotaMedia(curso, trimestre, contexto);
        }
    }

    cargarDataTable(){
            $('#alumnos').DataTable({
                data: this.cursos[0],
                columns: [
                    {data: 'curso'},
                    {data: ''}
                ]
            });
    }

    notaAleatoria(){
        return faker.datatype.float({min: 1, max: 10, precision: .1});
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    getCursoPorNombre(curso){
        for (let i = 0; i < this.cursos.length; i++) {
            if (this.cursos[i].curso === curso){
                return this.cursos[i];
            }
        }

    }

}