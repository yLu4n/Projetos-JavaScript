let caixaEntrada = document.getElementById('caixaEntrada')
let botoes = document.getElementById('botao')

let string = ''

botoes.forEach(element => {
    element.addEventeListener('click', (b)=> {
        if(b.target.innerText == '='){
            string = String(eval(string))
            caixaEntrada.value = string;
        }
        else if(b.target.innerText == 'AC')
        else{
            string += b.target.innerText
            caixaEntrada.value = string
        }
    })
});