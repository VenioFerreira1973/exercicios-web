let valor
console.log(valor) //o sistema apresenta a mensagem undefined

//console.log(valor2) //o sistema da um erro pois a variavel ser quer foi declarada

valor = null
console.log(valor) //neste caso a variavel foi inicializada com o valor null - que significa a ausencia de valor
//console.log(valor.toString()) //da um erro pois estamos tentando a acessar uma propriedade de um valor nulo ou inexistente

const produto = {}
console.log(produto.preco)// não da erro, apenas informa undefined pois o preco é uma propriedade que nao foi definida 
//console.log(produto.preco.valor)//da erro pois estou tentando acessar uma propriedade de uma outra propriedade que não foi definida


produto.preco = 4.5
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //neste caso não da erro retorna false pois o preco esta undefined
console.log(produto) //retorna a propriedade preco com o valor undefined conforme atribuição acima

//delete produto.preco //esta linha retiraria o atributo preco do objeto produto

produto.preco = null //esta linha torna o preço null ou produto sem preço


