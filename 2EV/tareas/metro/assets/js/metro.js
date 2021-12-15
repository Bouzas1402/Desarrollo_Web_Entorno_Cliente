const colores = ["red", "blue","yellow", "lime", "aqua", "fuchsia", "gray", "olive", "navy", "maroon", "green", "purple"];

class Metro {
    constructor(lineas) {
        this.nombre = "Metro madrid";
        this.lineas = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = new Lineas(lineas[i].nombre, colores[i], lineas[i].estaciones);
            this.lineas.push(linea);
        }
        this.printMetro();
    }

    getEstacion(nombre){
        let estaciones = [];
        for (let i = 0; i < this.lineas.length; i++) {
            let estacion = this.lineas[i].getEstacion(nombre);
            if (estacion !== null && estacion !== undefined){
                estaciones.push(estacion);
            }
        }
        return estaciones;
    }

    printMetro(){
        let metro = "";
        for (let i = 0; i < this.lineas.length; i++) {

            metro += "<div class='row text-center justify-content-center mb-5'><div class='col-xl-6 col-lg-8'><h2 class='linea-titulo'>" + this.lineas[i].nombre.replace('-', ' ') + "</h2></div></div><div class='row'><div class='col'><div class='timeline-steps aos-init aos-animate' data-aos='fade-up'>";
            for (let j = 0; j < this.lineas[i].estaciones.length; j++){
                metro += "<div class='timeline-step'><div class='timeline-content' data-toggle='popover' data-trigger='hover' data-placement='top' title='' data-original-title='" + this.lineas[i].estaciones[j].nombre + "'>" +
                    "<div class='inner-circle' style='background-color: " + this.lineas[i].color + "'>" +
                    "<button type='button' class='btn boton-paradas' data-bs-toggle='modal' data-bs-target='#" + this.lineas[i].nombre + this.lineas[i].estaciones[j].nombre + "'></button></div>" +
                    "<p class='h6 mt-3 mb-1'>" + this.lineas[i].estaciones[j].nombre.replaceAll('-', ' ') + "</p></div></div>";
            }
            metro += "</div></div></div></div>";
        }




        for (let i = 0; i < this.lineas.length; i++) {


            for (let j = 0; j < this.lineas[i].estaciones.length; j++) {
                metro += "<div class='modal fade' role='dialog' aria-bs-hidden='true' tabIndex='-1' id='" + this.lineas[i].nombre + this.lineas[i].estaciones[j].nombre + "'>" +
                    "<div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content'>" +
                    "<div class='modal-header'>" +
                    "<h4 class='modal-title'>" + this.lineas[i].estaciones[j].nombre.replace('-', ' ') + "</h4>" +
                    "<button type='button' class='btn btn-close' data-bs-dismiss='modal' aria-bs-label='Close'></button>" +
                    "</div><div class='modal-body'>";







                    metro += "<div class='row text-center justify-content-center mb-5'>" +
                        "                    <div class='col-xl-6 col-lg-8'>" +
                        "                        <h3 class=''>" + this.lineas[i].nombre.toUpperCase() + "</h3>" +
                        "                    </div>" +
                        "                </div>" +
                        "                <div class='row'>" +
                        "                    <div class='col'>";

                    if (this.lineas[i].estaciones[j].caminos.length > 1) {
                        metro += "    <div class='timeline-steps aos-init aos-animate' data-aos='fade-up'>" +
                            "           <div class='timeline-step'>" +
                            "            <div class='timeline-content' data-toggle='popover' data-trigger='hover' data-placement='top' title='' data-content='' data-original-title='2003'>" +
                            "               <div class='inner-circle' style='background-color: " + this.lineas[i].color + "'></div>" +
                            "                <p class='h6 mt-3 mb-1'>" + this.lineas[i].estaciones[j].caminos[0].destino + "</p>" +
                            "            </div></div>" +
                            "        <div class='timeline-step'>" +
                            "            <div class='timeline-content' data-toggle='popover' data-trigger='hover' data-placement='top' title='' data-content='' data-original-title='2003'>" +
                            "                <div class='inner-circle' style='background-color: " + this.lineas[i].color + "'></div>" +
                            "                <p class='h6 mt-3 mb-1'>" + this.lineas[i].estaciones[j].nombre + "</p>" +
                            "            </div></div>" +
                            "         <div class='timeline-step'>" +
                            "            <div class='timeline-content' data-toggle='popover' data-trigger='hover' data-placement='top' title='' data-content='' data-original-title='2003'>" +
                            "                <div class='inner-circle' style='background-color: " + this.lineas[i].color + "'></div>" +
                            "                <p class='h6 mt-3 mb-1'>" + this.lineas[i].estaciones[j].caminos[1].destino + "</p>" +
                            "            </div></div>" +
                            "         </div>";

                    } else {
                        metro += "    <div class='timeline-steps aos-init aos-animate' data-aos='fade-up'>" +
                            "           <div class='timeline-step'>" +
                            "            <div class='timeline-content' data-toggle='popover' data-trigger='hover' data-placement='top' title='' data-content='' data-original-title='2003'>" +
                            "               <div class='inner-circle' style='background-color: " + this.lineas[i].color + "'></div>" +
                            "                <p class='h6 mt-3 mb-1'>" + this.lineas[i].estaciones[j].caminos[0].destino + "</p>" +
                            "            </div></div>" +
                            "           <div class='timeline-step'>" +
                            "            <div class='timeline-content' data-toggle='popover' data-trigger='hover' data-placement='top' title='' data-content='' data-original-title='2003'>" +
                            "                <div class='inner-circle' style='background-color: " + this.lineas[i].color + "'></div>" +
                            "                <p class='h6 mt-3 mb-1'>" + this.lineas[i].estaciones[j].nombre + "</p>" +
                            "            </div></div>" +
                            "        </div>";
                    }


                    metro += "                        </div>" +
                        "                    </div>" +
                        "                </div>";










                metro += "</div><div class='modal-footer'><button type='button' class='btn btn-primary' data-bs-dismiss='modal'>Cerrar</button></div></div></div></div>";

            }

        }
        document.getElementById("metro").innerHTML = metro;

    }


}
// getStacion (nombreStacion) return caminos que conectan