Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        } 
    }
    return newArray

}
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

let ehCaro = produto => produto.preco >= 500
let ehFragil = produto => produto.fragil


resultado = produtos.filter2(ehCaro).filter2(ehFragil)[0].preco//mostra somente o preco do primeiro elemento
console.log(resultado)
