class App {

    constructor(url) {
        let screen = new Pantalla();
        const dateCookie = new Date();
        dateCookie.setTime(dateCookie.getTime() + (365*24*60*60*1000));
        let datos;
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    let contabilidad = new Contabilidad();
                    datos = JSON.parse(req.responseText);
                    document.cookie = "contabilidad=" + JSON.stringify(datos) + ";" + dateCookie;
                        let tienda1 = new Tienda('tienda1');
                        contabilidad.tiendas.push(tienda1);
                        let tienda2 = new Tienda('tienda2');
                    contabilidad.tiendas.push(tienda2);
                    for (let i = 0; i < datos.length; i++) {
                        if (datos[i].tienda === tienda1.nombre){
                            tienda1.addGasto(datos[i]);
                        } else if (datos[i].tienda === tienda2.nombre) {
                            tienda2.addGasto(datos[i]);
                        }

                    }
                      tienda1.addGastoFaker('gasto');
                      tienda1.addGastoFaker('venta');
                      tienda1.addGastoFaker('compra');
                      tienda2.addGastoFaker('compra');
                    for (let i = 0; i < contabilidad.tiendas.length; i++) {
                        screen.tiendasRecaudacion(contabilidad.tiendas[i].nombre, contabilidad.tiendas[i].getRecaudacion());
                    }
                       console.log(tienda1.getGastos());
                    //screen.contruirDataTable(tienda1.gastos);
                    console.log(contabilidad);
                } else {
                    datos = "Error loading page\n";
                }
            }
        };
        req.send();
    }




}