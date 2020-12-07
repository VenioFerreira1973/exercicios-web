const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//função keys recupera apenas as "chaves"
console.log(Object.values(pessoa))//função values recupera apenas os "valores"
console.log(Object.entries(pessoa))//função entries recupera arrays contendo os pares chave/valor do objeto 

Object.entries(pessoa).forEach(e => {
    console.log(e)
});

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}:${e[1]}`)
});

//abaixo outra forma de se fazer mas que dá o mesmo resultado
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,//poderá ser percorrida através de funções de objeto com keys por exemplo
    writable: false,//esta propriedade iniciada com false indica que o valor do atributo não poderá ser modificado 
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/2017' //a tentativa de alterar o valor do atributo falhará pois ele é writable = false
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))//como a propriedade enumerable está igual a true ao acessar o objeto pela função keys ele mostra o novo atributo dataNascimento

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)//esta função compoe um objeto de destino com os atributos e valores dos objetos originais, chaves repetidas terão valores sobrescritos

Object.freeze(obj)
obj.c = 1234 //esta linha não terá efeito pois obj foi congelado pela função freeze
console.log(obj)

