let amigos = []; 
let listaDeAmigos = document.getElementById('listaAmigos');
let resultadoSorteio = document.getElementById('resultado');


function limparCampo(){
    campoLimpo = document.querySelector('input');
    campoLimpo.value = '';
}

function ListaOrganizada(){
    listaDeAmigos = createElement()
}

function adicionarAmigo(){
    let campo = document.getElementById('amigo').value;
    if (campo == ''){
        alert('Por favor, insira um nome.')
    } else {
        amigos.push(campo)
        console.log(amigos)
        atualizarLista();
    }   limparCampo();    
     
}   

function atualizarLista(){
    listaDeAmigos.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) { 
        let li = document.createElement('li'); 
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos == 0){
        alert('Você não colocou nome de amigos!');
    } else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSelecionado = amigos[indiceAleatorio];
        resultadoSorteio.innerHTML = `O amigo sorteado é ${amigoSelecionado}`;     
        amigos = [];
        atualizarLista(); 
    } 
}
