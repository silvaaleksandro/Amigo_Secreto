//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;
    //console.log(`Texto = ${amigo}`);
    if(amigo == "" || amigo == NaN){
        alert("Por favor insira um nome.");
    }else {
        amigos.push(amigo);
        //amigos.forEach(element => {console.log(element)});

    }
    document.getElementById("amigo").value = "";
 
}