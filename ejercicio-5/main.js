
var n = parseInt(prompt("ingresa número"));
var primo = 1;
function sucesionPrimo(n){  
 for (i = 2; i <= n; i++){
   for (j = 2; j <= i/2; j++)
     if (i%j == 0)
       primo = 0; 
     if(primo==1)
       console.log(i);
       primo = 1;
 } 
}
sucesionPrimo (n);

