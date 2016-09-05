var n = parseInt(prompt("ingrese numero"));

function asterisco(n){
    for(var i = 1; i >= 1; i--){
        for(var j = 1; j >= 1; j++){
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