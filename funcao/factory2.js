function criarProduto(nome, preco, desconto = 0.1){
    return{
        nome, //como foi utilizado o mesmo nome do parametro de entrada não é necessario fazer a atribuição
        preco,//como foi utilizado o mesmo nome do parametro de entrada não é necessario fazer a atribuição
        desconto,
        aposDesconto: preco - (preco * desconto)
    }
}

console.log(criarProduto('Geladeira', 1000.00))
console.log(criarProduto('Fogão', 800.00))