var n = parseInt(prompt("Ingrese un número"));
function  asteriscosinversos(n) { 
   for (var i = n; i >=1; i--) {
       for (var j = i; j >= 1; j--) {
           document.write("*");
       }
       document.write("<br>");
   }
}
asteriscosinversos(n);