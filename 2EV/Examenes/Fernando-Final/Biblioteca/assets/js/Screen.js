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
                {title: "Color", data: "ubicacion"},
                {title: "Estaciones", data: "estado"}
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
            const template = document.querySelector('#lista-cursos').content;
            const listaCursos = new DocumentFragment();
            listaCursos.appendChild(document.importNode(template, true));
            listaCursos.querySelector('span').textContent = "Libros";
            listaCursos.querySelector('a').setAttribute('data-bs-target', "#modal-libros");
            listaCursos.querySelector('ul').id = "modal-libros";
            for (let i = 0; i < datos.length; i++) {
                let trimestre = '<li><button type="button" onClick="app.dibujarLibro(' +  + ')" className="w-100">' + datos[i].titulo + '</button></li>';
                listaCursos.querySelector('ul').innerHTML += trimestre;
            }
            document.querySelector('#sidebar-nav').appendChild(listaCursos);
        }

    dibujarFormulario(){
        const templateFormulario = document.querySelector('#template-formulario').content;
        const formulario = new DocumentFragment();
        formulario.appendChild(document.importNode(templateFormulario, true));
        document.querySelector('section .row').appendChild(formulario);
    }


    dibujarLibro(libro){

        document.getElementById('img-perfil').src = libro.imagen;
        document.querySelector('#descripcion-libro').innerText = libro.descripcion;
        document.querySelector('#titulo-libro').innerText = libro.titulo;
        document.querySelector('#genero-libro').innerText = libro.genero;

    }

}