//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;
    //console.log(`Texto = ${amigo}`);
    if(amigo == "" || amigo == NaN){
        alert("Por favor insira um nome.");
    }else {
        amigos.push(amigo);
        criarLista();
        //amigos.forEach(element => {console.log(element)});
        console.log(amigos);
    }
    document.getElementById("amigo").value = ""; 
}

function criarLista(){
    lista = document.getElementById("listaAmigos") ;
    lista.innerHTML = "";
    
    amigos.forEach(element => {
        item = document.createElement("li");
        item.innerHTML = element;
        lista.appendChild(item);
    });
}