
function prueba() {
    /* let doc = document.open("text/html","replace");
    var texto = "<html><body><h1>Saludo</h1>Hola tu edad es de 31 años.";
    doc.write(texto);
    doc.close(); */
    document.write(copiar());
}

async function copiar(){
    let file = new FileReader();
    file.onload = function (event) {
        console.log(file.result);
    }
    file.readAsText("file:///copia1.html");
    let documento = file.result;
    console.dir(documento);
    return documento;
    /*let documento = fopen(getScriptPath("copia1.html"),0);
    let file_length =flength(documento);
    let contenido = fread(documento, file_length);
    return contenido; */
}

function datosJSON() {

    const xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");

    xhttp.open('GET', './json/lineas.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if(xhttp.readyState === 4 && xhttp.status === 200){
            let datos = JSON.parse(xhttp.responseText);

            datos.forEach(linea => {
                console.log(typeof linea.nombre);
                console.log(linea.color);
                console.log(linea.estaciones);
                console.log("**********************");
            })

        }

    }
}