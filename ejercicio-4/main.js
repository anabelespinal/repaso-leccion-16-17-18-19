var numero = parseInt(prompt("ingresar numero"));

function sucesionImpares (numero) {
	for(var i = 1; i <= numero; i += 2){
		console.log(i);
	}
}

sucesionImpares(numero);
