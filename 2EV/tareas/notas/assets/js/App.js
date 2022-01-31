function sacarDatos() {
    let datos;
    var req = new XMLHttpRequest();
    req.open('GET', "assets/data/data-courses.json");
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if(req.status == 200)
                datos = JSON.parse(req.responseText);

            else
               datos = "Error loading page\n";
        }
    };
    req.send();

    sleep(500).then(() => {
        datos = this.rellenarCursos(datos);
        return datos;
    });

}

function rellenarCursos(datos){
    console.log(datos);
    for (let i = 0; i < datos.length; i++){
        for (let j = 0; j < datos[i].capacidad; j++){
            datos[i].estudiantes.push(faker.name.findName());
        }
        for (let j = 0; j < Object.keys(datos[i].calificaciones).length - 1; j++) {
            for (let k = 0; k < datos[i].capacidad; k++) {
                let notaEstudiante = {nombre : datos[i].estudiantes[k], nota: notaAleatoria()}
                // datos[i].calificaciones[j].push(notaEstudiante);
                Object.values(datos[i].calificaciones)[j].push(notaEstudiante);
            }
        }
        for (let k = 0; k < datos[i].capacidad; k++) {
            let notaFinal = Math.round(Object.values(datos[i].calificaciones)[2][k].nota + Object.values(datos[i].calificaciones)[1][k].nota + Object.values(datos[i].calificaciones)[0][k].nota / 3);
            let notaEstudiante = {nombre : datos[i].estudiantes[k], nota: notaFinal}
            Object.values(datos[i].calificaciones)[3].push(notaEstudiante);
        }
    }
    return datos;
}

function pintarPlantillas(cursosCentro){
    console.log(cursosCentro);
    const template = document.querySelector('#div-canvas').content;
    const div = new DocumentFragment();
    div.appendChild(document.importNode(template, true));
    const datosNota = [];
    const datosAlumnos = [];
    for (let i = 0; i < cursosCentro.length; i++) {

        let tablaAlumnosNota = document.createElement("canvas");
        let tablaMediaNotas = document.createElement("canvas");
        tablaAlumnosNota.id = cursos[i].curso;
        tablaMediaNotas.id = cursos[i].curso + '-media';

        div.appendChild(tablaAlumnosNota)
        document.body.insertBefore(div, document.lastChild);

        for (let j = 0; j < cursosCentro[i].capacidad; j++) {
            datosNota.push(Object.values(cursosCentro[i].calificaciones)[3][j].nota);
            datosAlumnos.push(Object.values(cursosCentro[i].calificaciones)[3][j].nombre);
        }

        const ctx1 = document.getElementById(cursos[i].curso);
        const myChart = new Chart(ctx1, {
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
                    text: cursosCentro[0].curso
                },
                scales: {
                    y: {
                        max: 10,
                        beginAtZero: true
                    }
                }
            }
        });
        let suspensos = 0;
        let aprobados = 0;
        let sobresalientes = 0;

        for (let i = 0; i < datosNota.length; i++){
            if(datosNota[i] < 5){
                suspensos++;
            } else if(datosNota[i] > 5 && datosNota[i] < 8){
                aprobados++;
            } else {
                sobresalientes++;
            }

        }

        const ctx2 = document.getElementById(cursos[i].curso + '-media');
        const myChart1 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Suspensos', 'Aprobados', 'Sobresalientes'],
                datasets: [{
                    label: ' - Nota Final',
                    data: [suspensos, aprobados, sobresalientes],
                    backgroundColor: [
                        'rgba(239,101,101,0.93)',
                        'rgba(187,245,175,0.78)',
                        'rgba(166,180,238,0.88)'
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

}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}