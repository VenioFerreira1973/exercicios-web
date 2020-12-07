function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let contaSort = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    contaSort++
    console.log(`Opcao Escolhida foi ${opcao}.`)
}
console.log(`Foram sorteados ${contaSort} números.`)
console.log('Até a próxima!')