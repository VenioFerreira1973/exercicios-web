console.log(typeof Object)//neste caso o javascript retornara function pois se refere a propriedade original de Object
console.log(typeof new Object)//neste caso o javascript retorna object pois se refere ao fato do Object estar sendo instanciado como um objeto

//abaixo um exemplo com objeto criado pelo usuário, o efeito é o mesmo do código anterior
const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente())


//abaixo o exemplo de criação de uma classe que tera o mesmo efeito 
class Produto{} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())