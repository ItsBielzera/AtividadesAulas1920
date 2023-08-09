let nome = 'Gabriel'
let num1 = 7
let num2 = 10
let soma = num1 + num2
let mult = num1 * num2

alert (soma)
console.log(nome)
console.log(mult)

function subtracao(num1, num2) {
    if (num1 < num2) {
        return console.log('n foi possivel subtrair')
    } else {
        return console.log(num1 - num2)
    }

}

subtracao(num1, num2)

function divisao(num1, num2) {
    if (num2 < 0 ) {
        return console.log('n foi possivel dividir')
    } else {
        return console.log(num1 / num2)
    }
}

divisao(num1, num2)


const fruta = {
    nome: 'maçã',
    cor: 'vermelho',
    peso: 4,
    tipo:'fruta'
}

console.log(fruta)
console.log(fruta.tipo)


const xicaras = [
    {
        cor: 'branca',
        peso: 10,
        capacidade: 250,
        defeito: false
    },
    {
        cor: 'verde',
        peso: 80,
        capacidade: 1000,
        defeito: true
    },
    {
        cor: 'vermelha',
        peso: 50,
        capacidade: 400,
        defeito: false
    },
    {
        cor: 'azul',
        peso: 80,
        capacidade: 340,
        defeito: true
    },
    {
        cor: 'preta',
        peso: 54,
        capacidade: 460,
        defeito: false
    },
]

console.log(xicaras)
console.log(xicaras[1].cor)

xicaras.forEach((item) => {

    if(item.cor === 'vermelha') {
        console.log('vc possui uma xicara vermelha')
    } else {
        console.log(item.cor)
    }
})

let inputNome = document.querySelector('#nome')
let inputIdade = document.querySelector('#idade')
let listaInformacoes = document.querySelector('#lista-informacoes')

const nomes = []
const idades = []
const informacoes = []

function salvarInformacoes() {

informacoes.push({
    nome: inputNome.value,
    idade: inputIdade.value
})
    inputNome.value = ''
    inputIdade.value = ''
}

function visualizarInformacoes() {

    let itemListaInformacoes


    informacoes.forEach((informacoes) => {
        
        itemListaInformacoes = document.createElement('li')

        itemListaInformacoes.innerHTML = informacoes.nome
        
    })
    listaInformacoes.appendChild(itemListaInformacoes)
    
}

let inputValor1 = document.querySelector('#valor1')
let inputValor2 = document.querySelector('#valor2')
let resultado = document.querySelector('#resultado')

function limpaInput() {
    inputValor1.valor = ''
    inputValor2.valor = ''
}

function somar () {
    resultado.innerHTML = parseInt(inputValor1.value) + parseInt(inputValor2.value)
    limpaInput()
}

function subtrair () {
    resultado.innerHTML = parseInt(inputValor1.value) - parseInt(inputValor2.value)
    limpaInput()
}

function dividir () {
    resultado.innerHTML = parseInt(inputValor1.value) / parseInt(inputValor2.value)
    limpaInput()
}
function multiplicar () {
    resultado.innerHTML = parseInt(inputValor1.value) * parseInt(inputValor2.value)
    limpaInput()
}