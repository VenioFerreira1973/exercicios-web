console.log('a=', a)//a variavel já existe na pratica, mas ela ainda não tem valor neste ponto do código por isso retornará undefined
var a = 2
console.log('a=', a)


console.log('a=', a)//com o let o hoisting(içamento) não ocorre neste caso gera erro direto de variável nao declarada
let a = 2
console.log('a=', a)
