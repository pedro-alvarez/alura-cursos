// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo Secreto';

// let paragrafo = document.querySelector ('p');
// paragrafo.innerHTML = 'Escolha Entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo Secreto');
    exibirTextoNaTela('p', 'Escolha Entre 1 e 10');
}

exibirTextoNaTela('h1', 'Jogo Secreto');
exibirTextoNaTela('p', 'Escolha Entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' :
        'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com 
        ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero e menor');
        } else { 
            exibirTextoNaTela('p', 'O numero e maior');
        }
    tentativas ++;
        limparCampo();
    }
    
}

function GerarNumeroAleatorio () {
    let numeroEscolhido parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return GerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'ACERTOU!');
}