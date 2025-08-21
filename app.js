//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById("amigo");
    
    if(amigo.value == "" || amigo.value == NaN){
        alert("Por favor insira um nome.");
    
    }else {
        if(amigos.indexOf(amigo.value) < 0){
            amigos.push(amigo.value);
            criarLista();
        }       
    
    }

    amigo.value = ""; 
    amigo.focus(); 
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


function sortearAmigo(){
    let qtdeAmigos = amigos.length;
    let indiceAmigo = parseInt(Math.random() * qtdeAmigos);    

    resultado = document.getElementById("resultado") ;
    resultado.innerHTML = amigos[indiceAmigo];    

  /*   item = document.createElement("li");
    item.innerHTML = amigos[indiceAmigo];
    resultado.appendChild(item);    */ 
}