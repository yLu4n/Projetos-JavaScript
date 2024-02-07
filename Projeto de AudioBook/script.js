const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo')
const botaoAvancar = document.getElementById("proximo")
const botaoVoltar = document.getElementById("anterior")
const nomeCapitulo = document.getElementById("capitulo")

const numeroCapitulos = 10;
let tocando = false;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill")
    botaoPlayPause.classList.add("bi-pause-circle-fill")
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill")
    botaoPlayPause.classList.add("bi-play-circle-fill")
}

function tocarOuPausar(){
    if ( tocando === false ){
        tocarFaixa();
        tocando = true;
    } else {
        pausarFaixa();
        tocando = false;
    }
} 

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos ){
        capituloAtual = 1;
    }else{
        capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    tocando = true
    trocarNomeFaixa();
}

function voltarFaixa(){
    if (capituloAtual === 1 ){
        capituloAtual = numeroCapitulos;
    }else{
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    tocando = true
    trocarNomeFaixa();
}



botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);