var n = parseInt(prompt("Ingrese un número"));

function  asteriscos(n) { 
   for (var i = 1; i <= n; i++) {
       for (var j = 0; j < i; j++) {
           document.write("*");
       }
       document.write("<br>");
   }
}
asteriscos(n);