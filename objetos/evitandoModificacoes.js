//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))//retorna false pois na definição do objeto ele foi pré classificado como preventExtensions 

produto.nome = 'Borracha'//esta linha de código será executada normalmente, ou seja, o nome do produto será alterado como esperado
produto.descricao = 'Borracha escolar branca'//esta linha de código não terá qualquer efeito pois o objeto origina não possui este atributo e como ele é preventExtensions não será acrescentado o nome atributo
delete produto.tag//esta linha será executada normalmente será deletado o atributo tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35 }
Object.seal(pessoa)//não é possivel adicionar ou deletar novos atributos mas é possivel alterar atributos existentes
console.log('Selado: ', Object.isSealed(pessoa))


pessoa.sobrenome = 'Silva' //não acontecerá nada pois o objeto está "selado"
delete pessoa.nome //também não será possível deletar atributos
pessoa.idade = 29
console.log(pessoa)


//Object.freeze = selada + valores constantes
//este método congela completamente o objeto não permitindo inclusão, deleção de atributos e nem a modificação dos valores dos mesmos
