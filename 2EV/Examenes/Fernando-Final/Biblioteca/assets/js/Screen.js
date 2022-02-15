class Screen {

    constructor() {
    }

    dataTable(datos) {
        console.log(datos);

        new DataTable('#dataTable', {
            data: datos,
            columns: [
                {title: "Nombre", data: "titulo"},
                {title: "Color", data: "imagen"},
                {title: "Estaciones", data: "genero"}
            ]
        });
    }
}