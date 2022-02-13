class Screen {

    constructor() {}

    dataTable(datos) {
        new DataTable('#dataTable', {
            data: datos,
            columns: [
                {title: "Nombre", data: "nombre"},
                {title: "Color", data: "color"},
                {title: "Estaciones", data: "estaciones"}
            ]
        });
    }
}




