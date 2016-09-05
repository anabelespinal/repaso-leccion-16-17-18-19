function fibonacci(numero) {
	var a = 0;
	var b = 1;
	var fibo; 
	var numero = parseInt(prompt("Ingrese un número"));
	console.log(a +"\n");
	console.log(b +"\n");
	for(i=3; i<=numero; i++){
	  fibo = (a+b);
	  console.log(fibo+ "\n");
	  a = b;
	  b = fibo;
	}
}

fibonacci();