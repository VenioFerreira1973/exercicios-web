const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços
let transforna = json => JSON.parse(json) 
let soPreco = produto => produto.preco


resultado = carrinho.map(transforna).map(soPreco)
console.log(resultado)