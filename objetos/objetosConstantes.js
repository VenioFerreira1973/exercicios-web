//pessoa -> 123 (memória) -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' //não da erro pois no caso está se alterando um atributo do objeto constante e não a constante em si
console.log(pessoa)

//pessoa -> 456 (memória) -> {...} 
//pessoa = {nome = 'Ana'} //da erro pois a constante pessoa já tem um valor atribuído

Object.freeze(pessoa) //congela o objeto pessoa

pessoa.nome = 'Maria' //a tentativa de alteração do atributo não dará certo pois o objeto pessoa foi congelado anteriormente
pessoa.endereco = 'Rua ABC' //também não funciona devido ao congelamento do objeto
delete pessoa.nome //não funciona pelo mesmo motivo
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) //desta forma o objeto já nasce congelado, ou seja, não poderá ser alterado bem como os seus atributos também não poderão ser alterados
pessoaConstante.nome = 'Maria' //esta linha não fará efeito algum
console.log(pessoaConstante)


