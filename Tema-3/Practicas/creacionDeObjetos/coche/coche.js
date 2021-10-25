

function Coche (matricula) {
    this.matricula = matricula,
    this.gasolina = 50,
    this.dinero = 100,
    this.consumo = 7,
    this.historico = [],

     viajar = function(kilometros){
        this.gasolina = this.gasolina - ((7 * kilometros) / 100);
        console.log(gasolina);
    }

}


