var n = parseInt(prompt("ingrese numero"));

function asterisco(n){
    for(var i = 1; i <= n; i++){
        for(var j = 1; n >= j; j++){
            if(i > j){
                document.write("&nbsp; &nbsp");
            } else{
                document.write("* ");
            }
        }
        document.write("<br>");
    }  
} 

asterisco(n);