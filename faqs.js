function pesquisa() {
    var input, filtro, menu, menuItens, links, teste
    input = document.getElementById("textinput").value;
    filtro = input.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = document.getElementsByTagName("li");
    
    for (var i = 0; i < menuItens.length; i++) {
        var links = menuItens[i].getElementsByTagName("p")[0];
        
        if (links.innerHTML.toUpperCase().indexOf(filtro)>0) {
            menuItens[i].style.display = "";
            menuItens[2].style.display="none";
            



        } else {
            menuItens[i].style.display = "none";
            menuItens[2].style.display="";
            
        }

    }
}
var captura=document.getElementById("item1").textContent;
console.log(captura);
localStorage.setItem("captura",captura);
console.log(localStorage);




//var captura2=document.getElementById("");
//captura2.innerHTML=captura;


