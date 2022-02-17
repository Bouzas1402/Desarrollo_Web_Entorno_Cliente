class Screen {

    constructor() { }

    dataTable(datos) {
        const templateDataTable = document.querySelector('#template-dataTable').content;
        const dataTable = new DocumentFragment();
        dataTable.appendChild(document.importNode(templateDataTable, true))
        document.querySelector('section .row').appendChild(dataTable);
        new DataTable('#dataTable', {
            data: datos,
            columns: [
                {title: "Nombre", data: "titulo"},
                {title: "Genero", data: "genero"},
                {title: "Ubicacion", data: "ubicacion"},
                {title: "Estado", data: "estado", render: function (data, type, row) {
                    if (data === 'Disponible') {
                        return '<a class="disponible-sass btn btn-success" href=#" onclick="app.cambiarEstado(\'' + row.ubicacion + '\')"><span class="bi-check me-1">' + data + '</span></a>'
                    } else if (data === 'Prestado') {
                        return '<div><span class="prestado-sass bi bi-bookmark-dash me-1">' + data + '</span></div>';
                    } else if (data === 'Extraviado'){
                        return '<div><span class="extraviado-sass bi bi-bookmark-x-fill me-1">' + data + '</span></div>';
                    } else {
                        return '<div><span class="descatalogado-sass bi bi-bookmark-x me-1">' + data + '</span></div>';
                    }
                    }}
            ]
        });
    }

    dibujarCarousel(datos){
        const templateCarousel = document.querySelector('#template-carousel').content;
        const templateImgLibros = document.querySelector('#template-img-carousel').content;
        const carousel = new DocumentFragment();
        const imgLibros = new DocumentFragment();
        let active = true;
        carousel.appendChild(document.importNode(templateCarousel, true));
        imgLibros.appendChild(document.importNode(templateImgLibros, true));
        for (let i = 0; i < datos.length; i++) {
            let nombre = datos[i]["titulo"];
            let imagen = datos[i]["imagen"];
            let genero = datos[i]["genero"];
            let descripcion = datos[i]["descripcion"];
            imgLibros.querySelector('div').classList.remove('active');
            if (active) {
                imgLibros.querySelector('div').classList.add("active");
                active = false;
            }
            imgLibros.querySelector('h5').textContent = nombre;
            imgLibros.querySelector('.template-genero').textContent = genero;
            imgLibros.querySelector('img').src = imagen;
            imgLibros.querySelector('.template-descripcion').textContent = descripcion;
            carousel.querySelector('.carousel-inner').appendChild(document.importNode(imgLibros, true));
        }
        document.querySelector('section .row').appendChild(carousel);
    }

    dibujarInfoCard(datos){
        const templateInfoCard = document.querySelector('#info-card').content;
        const infoCard = new DocumentFragment();
        infoCard.appendChild(document.importNode(templateInfoCard, true));
        let disponibles = 0;
        let prestados = 0;
        let descatalogados = 0;
        let extraviados = 0;
        let total = datos.length;
        for (let i = 0; i < datos.length; i++){
            if(datos[i].estado === "Disponible") {
                disponibles++;
            } else if (datos[i].estado === "Prestado") {
                prestados++;
            } else if (datos[i].estado === "Descatalogado") {
                descatalogados++;
            } else if (datos[i].estado === "Extraviado") {
                extraviados++;
            }
        }
        infoCard.querySelector('.revenue-card .ps-3 h6').innerHTML = disponibles;
        infoCard.querySelector('.revenue-card .ps-3 span').innerHTML = (Math.trunc((disponibles * 100) / total) + "%");
        infoCard.querySelector('.sales-card .ps-3 h6').innerHTML = prestados;
        infoCard.querySelector('.sales-card .ps-3 span').innerHTML = (Math.trunc((prestados * 100) / total) + "%");
        infoCard.querySelector('.customers-card .ps-3 h6').innerHTML = descatalogados;
        infoCard.querySelector('.customers-card .ps-3 span').innerHTML = (Math.trunc((descatalogados * 100) / total) + "%");
        infoCard.querySelector('.extraviado-card .ps-3 h6').innerHTML = disponibles;
        infoCard.querySelector('.extraviado-card .ps-3 span').innerHTML = (Math.trunc((disponibles * 100) / total) + "%");
        document.querySelector('section .row').appendChild(infoCard);
    }

    pintarBarraLateral(datos){
            for (let i = 0; i < datos.length; i++) {
                let trimestre = '<li><button type="button" onClick="app.dibujarLibro(\'' + datos[i].titulo + '\');" className="w-100">' + datos[i].titulo + '</button></li>';
                document.querySelector('#lista-libros').innerHTML += trimestre;
            }
        }

    dibujarFormulario(){
        const templateFormulario = document.querySelector('#template-formulario').content;
        const formulario = new DocumentFragment();
        formulario.appendChild(document.importNode(templateFormulario, true));
        document.querySelector('section .row').appendChild(formulario);
    }

    dibujarLibro(libro){
        document.querySelector('section .row').innerHTML = "";
        const templatePerfilLibro = document.querySelector('#template-perfil-libro').content;
        const templateEjemplar = document.querySelector('#template-ejemplar-libro').content;
        const listaLibros = new DocumentFragment();
        const ejemplar = new DocumentFragment();
        listaLibros.appendChild(document.importNode(templatePerfilLibro, true));
        listaLibros.getElementById('img-perfil').src = libro.imagen;
        listaLibros.querySelector('#descripcion-libro').innerText = libro.descripcion;
        listaLibros.querySelector('#titulo-libro').innerText = libro.titulo;
        listaLibros.querySelector('#genero-libro').innerText = libro.genero;
        console.log(libro.ejemplares);
        for (let i = 0; i < libro.ejemplares.length; i++) {
            ejemplar.appendChild(document.importNode(templateEjemplar, true));
            ejemplar.querySelector('.col-lg-3').innerText = i + ' - ' + libro.ejemplares[i].ubicacion;
            ejemplar.querySelector('.col-lg-9').innerText = ' - ' + libro.ejemplares[i].estado;
            listaLibros.querySelector('#profile-ejemplar').appendChild(ejemplar);
        }
        document.querySelector('section .row').appendChild(listaLibros);
    }



    semicirculoChart(contexto, datos){
        console.log(datos);
        let novela = 0;
        let ensayo = 0;
        let poesia = 0;
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].genero === 'Ensayo'){
                ensayo++;
            } else if (datos[i].genero === 'Novela'){
                novela++;
            } else if (datos[i].genero === 'Poesia'){
                poesia++;
            }
        }

        let options = {
            series: [novela, ensayo, poesia],
            labels: ['Novela', 'Ensayo', 'Poesia'],
            chart: {
                type: 'donut',
                height: 500
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                    offsetY: 10
                }
            },
            grid: {
                padding: {
                    bottom: -80
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        var chart = new ApexCharts(contexto, options);
        chart.render();
    }

}