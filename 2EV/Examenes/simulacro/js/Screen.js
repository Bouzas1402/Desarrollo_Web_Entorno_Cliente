class Screen {

    constructor() {
    }

    tiendasRecaudacion(nombre, recaudacion){
        const template = document.querySelector('#tiendas-template').content;
        const divTiendas = new DocumentFragment();
        divTiendas.appendChild(document.importNode(template, true));
        divTiendas.querySelector('.nombreTienda').innerText = nombre;
        divTiendas.querySelector('.cantidadRecaudacion').innerText = recaudacion;
        document.getElementById('tiendas').appendChild(divTiendas);
    }

 /*   contruirDataTable(datos) {
        let myData = {
            "headings": [
                "nombre",
                "fecha",
                "importe",
                "concepto"
            ],
            "data": ,


        };
        const datatables = document.querySelectorAll('.datatable')
        datatables.forEach(datatable => {
            new simpleDatatables.DataTable(datatable,{

                columns: [
                    // Sort the second column in ascending order
                    { select: 1, sort: "desc" },
                ],
                'paging':false,

                'data': myData,

            });
        })
    }

*/
}