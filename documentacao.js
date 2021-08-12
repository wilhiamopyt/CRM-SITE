   
function enviar(){          
 var valor = document.getElementById("textinput").value;
        
}

function inserir(){
var valor = document.getElementById("entrada").value;

}

var p=document.createElement("p");
p.appendChild(valor);

function inicia(){
    document.body.appendChild(p);
}


window.addEventListener("load",inicia);