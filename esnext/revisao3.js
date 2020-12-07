//ES8: Object.values (pega os valores de um objetos) /Object.entries (retorna a chave/valor)
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))//retorna os valores
console.log(Object.entries(obj))//retorna um array com a tupla chave/valor

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,//usa o nome definido anteriormente a sintaxe antiga obrigava a declaração da seguinte forma nome: nome
    ola(){//a palavra function deixou de ser obrigatória antiga: ola: function()
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class - introdução do conceito de classes
class Animal {
    constructor(cor){
        this.cor = 'Preto'
    }
}
class Cachorro extends Animal{
    falar() {
        return 'Au au!'
    }
}
const cao = new Cachorro()
const ani = new Animal

console.log(ani.cor)

console.log(cao.falar(), cao.cor)