function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco

}

global.preco = 20
global.desconto = 0.1
console.log(getPreco())
console.log(produto.getPreco(0.4))

const carro = {preco: 49990, desconto: 0.20, getPreco}
console.log(carro.getPreco())
//abaixo a chamada usando a palavra call é equivalente se no objeto carro também tiver uma referência a função getPreco
const carro2 = {preco: 49990, desconto: 0.20}
console.log(getPreco.call(carro2))
console.log(getPreco.apply(carro2))//a palavra apply tem o mesmo comportamento

console.log(getPreco.call(carro, 0.17, '$'))//usando a palavra call com parametros
console.log(getPreco.apply(carro, [0.17, '$']))//a diferença aqui é que os parametros na apply são passados em um array
console.log(getPreco.apply(global, [0.17, '$']))//a diferença aqui é que os parametros na apply são passados em um array