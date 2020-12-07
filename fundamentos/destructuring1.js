//novo recurso do ES2015 - Ecma 2015 ultima versão do javascript
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //desta forma você está pegando de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade)

const {nome: n , idade: i} = pessoa //desta forma você obtem o mesmo resultado porem com os nome dos atributos abreviados
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) //neste caso nenhum dos atributos existem no objeto, para sobrenome o javascript vai retornar undefined, como foi passado com default o atributo bemHumorada será retornado como true 
console.log(pessoa)//o fato de ter feito uso do destructuring não altera o objetos


const {endereco} = pessoa
console.log(endereco)

const {endereco: {logradouro: l, numero: nu, cep: c}} = pessoa //obviamente cep está undefined
console.log(l, nu, c)

const {conta: {agencia, numero}} = pessoa //da erro pois o objeto não possui o atributo conta

