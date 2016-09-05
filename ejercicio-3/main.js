var numero = parseInt(prompt("ingresar numero"));

function sucesionPares (numero) {
	for(var i = 2; i <= numero; i += 2){
		console.log(i);
	}
}

sucesionPares(numero);
