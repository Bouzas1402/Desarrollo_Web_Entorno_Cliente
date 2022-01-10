class App{
	constructor(){
		this.coches = [];
	}

	init(){
		//this.coches.push(new Coche("7865-kol"));
		this.loadCoches();

		
	}

	print(){
		for (var i = 0; i < this.coches.length; i++) {
			console.log(this.coches[i].matricula);
		}
		
	}

	addCoche(coche){
		this.coches.push(coche);
	}


	loadCoches() {
			var xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        	if (xmlhttp.status == 200) {

        		
        		/*document.getElementById("Definition").innerHTML = xmlhttp.responseText.json();
        		*/

        		var cocheJSON = JSON.parse(xmlhttp.responseText);
        		//console.log(cocheJSON);

        		for (var i = 0; i <= cocheJSON.length - 1; i++)
        		{ 
        			
        			var matricula = cocheJSON[i]["matricula"];
        				let coche = new Coche(matricula);
        				app.addCoche(coche);


        		}

        		app.print();
        		
        	}
        	else if (xmlhttp.status == 400) {
        		alert('There was an error 400');
        	}
        	else {;
        		console.log(xmlhttp);
        		alert('something else other than 200 was returned');
        	}
        }
    };

    xmlhttp.open("GET", "data/coches.json", true);
    xmlhttp.send();
}
}