const filhas = ['Valeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
const todosMais1 = filhas.concat(filhos, 'Fulano')

console.log(todos, filhas, filhos, todosMais1)

//mais um exemplo
console.log([0].concat([1,2], [3,4], 5, [[6,7]]))//[ 1, 2, 3, 4, 5, [ 6, 7 ] ]