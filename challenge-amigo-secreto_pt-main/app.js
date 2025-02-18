let amigos = [];

function adicionarAmigo () {
    let nomeAmigo = document.getElementById("amigo");
    let nome = nomeAmigo.value.trim(); // Corrigido "vale" para "value"

    if(nome === ''){
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    nomeAmigo.value = "";
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`; // Corrigida tag <li>
}
