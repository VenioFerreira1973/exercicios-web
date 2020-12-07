function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let contaSort = 0

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    contaSort++
    console.log(`Opcao Escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log(`Foram sorteados ${contaSort} números.`)
console.log('Até a próxima!')
