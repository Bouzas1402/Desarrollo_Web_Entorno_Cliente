class Cartera {

    constructor() {
        this.nombre = nombre;
        this.gastos = [];
        this.usuarios = [];
    }

    addGasto(gasto){
        this.gastos.push(gasto);
        var usuarioTmp = gasto.usuario;
        if (!this.usuarios.includes(usuarioTmp)){
            this.usuarios.push(usuarioTmp);
        }
    }
    addUsuario(usuario){
        this.usuarios.push(usuario);
    }

}