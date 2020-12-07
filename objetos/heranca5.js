//todos abaixo são funções
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//como Strings são funções ela permite a criação de novas funções como a codificada abaixo:
String.prototype.reverse = function(){
    return this.split('').reverse().join('') //a função split converte toda a string em um array contendo todos os caracteres da string, a função Array possui um metodo de reversão, assim reverte-se a string original e o join serve para converter novamente o array resultante em uma string
}

console.log('Escola Cod3r'.reverse())//como dito acima a função String não possui o metodo reverse, neste caso estamos utilizando a implementação gerada acima

Array.prototype.first = function(){
    return this[0] //a função array não contem um metódo para retornar o primeiro elemento, mas conseguimos facilmente pegar o primeiro elemento pelo seu indice e retorna-lo 
}

console.log([6,5,7,0,3,2,4].first()) //chamando o nome método criado 

String.prototype.toString = function(){
    return 'Lascou tudo!!!' //esta implementação sobrescreve o método toString que já existe na função String, isso é perigoso pois o sistema pode apresentar comportamento inesperado, portanto não é aconselhavel alterar métodos já existentes
}

console.log('Escola Cod3r'.reverse())//esta linha terá um comportamento inesperado pois internamente ela utiliza o médoto toString, como ele foi mudado resultará em algo estranho 

