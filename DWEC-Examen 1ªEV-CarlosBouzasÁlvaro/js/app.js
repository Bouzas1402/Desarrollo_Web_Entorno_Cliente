class App{

	constructor(){
		this.date = new Date();
		this.parking = new Parking(5);
	}

	getDate(){
		return this.date;
	}

	sumMinute(){
		var m = 1;
		this.date.setMinutes(this.date.getMinutes()+m)
	}

	aparcar(plaza){
		this.parking.aparcar(this.date, plaza);
	}

	desAparcar(matricula){
		this.parking.desAparcar(this.date , matricula);
	}

	formatDate( objFecha ){
		this.sumMinute();
		return objFecha.getDate()+"/"+(objFecha.getMonth()+1)+"/"+objFecha.getFullYear()+" "+objFecha.getHours()+":"+objFecha.getMinutes();
	}

	printParking(){
		var cabecera = "<tr><th>Plaza</th><th>Estado</th><th>Matrícula</th><th>Hora</th><th>Acciones</th></tr>";
		var cuerpo = "";
		for (var i = 0; i < this.parking.getPlazas().length; i++) {
			cuerpo += "<tr><td>" + (i+1) + "</td>";
			if(this.parking.getPlazas()[i] !== false) {
				cuerpo += "<td>Ocupado</td><td>" + this.parking.plazas[i].matricula + "</td><td>" + app.formatDate(this.parking.plazas[i].time) + "</td><td><button onclick='app.desAparcar(\"" + this.parking.plazas[i].matricula + "\")'>Desaparcar</button></td></tr>";
			} else {
				cuerpo += "<td>Libre</td><td>     </td><td>    </td><td><button onclick='app.aparcar(" + i + ")'>Aparcar</button></td></tr>";
			}
		}
		var output = cabecera + cuerpo;
		document.getElementById("parking").innerHTML = output;
	}

	printHistory(){
		var cuerpo = "";
		var cabecera = "<tr><th>Plaza</th><th>Matricula</th><th>Start</th><th>Finish</th><th>Time</th><th>Price</th></tr>";
			for (var i = 0; i < this.parking.history.length; i++) {
				var tiempoTrancurrido = this.parking.history[i][4].days + " dias | " + this.parking.history[i][4].hours + ":" + this.parking.history[i][4].minutes + " horas";
				 cuerpo += "<tr><th>" + this.parking.history[i][0] + "</th><td>" + this.parking.history[i][1] + "</td><td>" + app.formatDate(this.parking.history[i][2]) + "</td><td>" + app.formatDate(this.parking.history[i][3]) + "</td><td>" + tiempoTrancurrido + "</td><td>" + this.parking.history[i][5] + "</td></tr>";
			}
		var output = cabecera + cuerpo;
		document.getElementById("history").innerHTML = output;
	}

	mostrarFecha(){
		document.getElementById("date").innerHTML = this.formatDate(this.date);
	}

	mostrarCajero(){
		document.getElementById("cajero").innerHTML = "Recaudacion: "+this.parking.cajero;
	}

	calcularPorcentajeOcupacion(){
		return ((this.parking.getNumPlazasOcupadas()*100)/this.parking.getPlazas().length);
	}

	refreshBarOcupacion(){
		var status = 'success';
		var ocupacion = this.calcularPorcentajeOcupacion();
		document.getElementById("ocupacion").innerHTML = "Ocupacion: "+ ocupacion + " %";
		document.getElementById("ocupacion").classList = status;
	}

	actualizarPantalla(){
		this.mostrarCajero();
		this.refreshBarOcupacion();
		this.mostrarFecha();
		this.printParking();
		this.printHistory();
	}
}