const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]
/*

console.log(produtos.filter(function(p) {
    return false//retorna um array vazio
}))

console.log(produtos.filter(function(p) {
    return true//retorna o array inteiro
}))

console.log(produtos.filter(function(p) {
    return p.preco > 1000//retorna os elementos do array cujo preço é maior que 1000
}))*/

let ehCaro = produto => produto.preco >= 500 
let ehFragil = produto => produto.fragil


resultado = produtos.filter(ehCaro).filter(ehFragil)
console.log(resultado)
