function pesquisa(){
    var input,filtro,menu,menuItens,links
    input=document.getElementById("textinput").value;
    console.log(input)
    filtro=input.toUpperCase();
     menu=document.getElementById("menu");
     menuItens=document.getElementsByTagName("li");
    for(var i=0;i<menuItens.length;i++){
        var links =menuItens[i].getElementsByTagName("p")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>=0){
            menuItens[i].style.display="";

        }else{
            menuItens[i].style.display="none";
        }
    }


}