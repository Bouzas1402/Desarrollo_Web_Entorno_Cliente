class App{
    constructor() {
        this.cartera = null;
    }


    loadData(data) {
        for(let index = 0; index < data.length; index++){

        }

    }

    createCartera(nombre){
        this.cartera = new Cartera(nombre);
    }

    addGasto(gasto){
        this.cartera.addGasto(gasto);
        var usuarioTmp = gasto.usuario;
    }


}