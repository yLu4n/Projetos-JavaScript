const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const tituloCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura")
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura")
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura")

const verdeCipreste ={
    nome: "verde-cipreste",
    pasta: "imagens-verde-cipreste"
};

const azulInverno ={
    nome: "azul-inverno",
    pasta: "imagens-azul-inverno"
};

const meiaNoite ={
    nome: "meia-noite",
    pasta: "imagens-meia-noite"
};

const estelar ={
    nome: "estelar",
    pasta: "imagens-estelar"
};

const rosaClaro ={
    nome: "rosa-claro",
    pasta: "imagens-rosa-claro"
};

const opcoesDeCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesCaixa = ['41 mm', '45 mm']

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSeleiconada = document.querySelector('[name = "opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSeleiconada.charAt(0);
    
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';}

function trocarTamanho(){
    const idOpcaoSeleiconada = document.querySelector('[name = "opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSeleiconada.charAt(0);

    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesDeCores[corSelecionada].nome +" para caixa de " + opcoesCaixa[tamanhoSelecionado];
    if (opcoesCaixa[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }  
}

function trocarCor(){
    const idOpcaoSeleiconada = document.querySelector('[name = "opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSeleiconada.charAt(0);
    
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesDeCores[corSelecionada].nome +" para caixa de " + opcoesCaixa[tamanhoSelecionado];

    tituloCor.innerText = "Cor - " + opcoesDeCores[corSelecionada].nome;

    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-2.jpeg';

    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}