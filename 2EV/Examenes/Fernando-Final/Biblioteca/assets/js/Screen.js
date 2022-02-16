class Screen {

    constructor() { }

    dataTable(datos) {
        let data = [];


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
        const templateImgLibros = document.querySelector('#template-img-carousel').content;
        const imgLibros = new DocumentFragment();
        for (let i = 0; i < datos.length; i++) {
            let nombre = datos[i]["titulo"];
            let imagen = datos[i]["imagen"];
            let genero = datos[i]["genero"];
            let descripcion = datos[i]["descripcion"];
            imgLibros.appendChild(document.importNode(templateImgLibros, true));
            if (i === 0) {
                imgLibros.querySelector('div').classList.add("active");
            }
            imgLibros.querySelector('h5').textContent = nombre;
            imgLibros.querySelector('.template-genero').textContent = genero;
            imgLibros.querySelector('img').src = imagen;
            imgLibros.querySelector('.template-descripcion').textContent = descripcion;
            document.querySelector('.carousel-inner').appendChild(imgLibros);
        }
    }

    dibujarInfoCard(datos){
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
        document.querySelector('.revenue-card .ps-3 h6').innerHTML = disponibles;
        document.querySelector('.revenue-card .ps-3 span').innerHTML = (Math.trunc((disponibles * 100) / total) + "%");

        document.querySelector('.sales-card .ps-3 h6').innerHTML = prestados;
        document.querySelector('.sales-card .ps-3 span').innerHTML = (Math.trunc((prestados * 100) / total) + "%");

        document.querySelector('.customers-card .ps-3 h6').innerHTML = descatalogados;
        document.querySelector('.customers-card .ps-3 span').innerHTML = (Math.trunc((descatalogados * 100) / total) + "%");

        document.querySelector('.extraviado-card .ps-3 h6').innerHTML = disponibles;
        document.querySelector('.extraviado-card .ps-3 span').innerHTML = (Math.trunc((disponibles * 100) / total) + "%");


    }

}