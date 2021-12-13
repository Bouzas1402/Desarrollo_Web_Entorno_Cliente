class Parking{
	constructor( numPlazas ){
		this.plazas = [];
		for (var i = 0; i<numPlazas; i++) {
			this.plazas[i] = false;
		}
		this.cajero = 0;
		this.precioHora = 0.09;
		this.history = [];
	}

	aparcar(date, plaza){
		do {
			var matricula = prompt("introduce la matricula del vehiculo\n0000-XXX ó XX-0000-XX");
			var validar = this.validarMatricula(matricula);
		} while (!validar);
		this.ocuparPlaza(plaza, matricula, date);
	}

	desAparcar(date, matricula){
		for (var i = 0; i < this.plazas.length; i++){
			if (this.plazas[i].matricula === matricula){
				var historico = [(i+1), matricula, this.plazas[i].time, date, this.getTiempoOcupacionParking(i, date), this.calcularPrecio(this.getTiempoOcupacionParking(i, date))];
				this.history.push(historico);
				this.cajero += this.calcularPrecio(this.getTiempoOcupacionParking(i, date));
				this.plazas[i] = false;
				break;
			}
		}
	}
	calcularPrecio(tiempo){
		return this.precioHora * tiempo.minutes;
	}
	getTiempoOcupacionParking( plaza , now ){
		let diferencia = now.getTime() - this.plazas[plaza].time.getTime();
		var minutes = Math.round(diferencia/1000/60);	
		var hours = parseInt(diferencia/1000/60/60);		
		var days = parseInt(diferencia/(1000 * 3600 * 24));
		return {'days': days, 'hours':hours,'minutes': minutes};
	}
	ocuparPlaza(plaza, matricula, date){
		this.plazas[plaza] = {'matricula':matricula, 'time': new Date(date)};
	}

	getPlazas(){
		return this.plazas;
	}
	getNumPlazasOcupadas(){
		var numPlazasOcupadas = 0;
		for (var i = 0; i < this.plazas.length; i++) {
			if( this.plazas[i] !== false){
				numPlazasOcupadas++;
			}
		}
		return numPlazasOcupadas;
	}

	validarMatricula(matricula){
			var expresion = /^\d{4}-[a-zA-Z]{3}$|^[a-zA-Z]{1,2}-\d{4}-[a-zA-Z]{1,2}$/ig;
		return expresion.test(matricula);
	}	
}