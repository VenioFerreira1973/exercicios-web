//tagged templates - processa o template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
//console.log(tag `${aluno} está ${situacao}.`)
/*
[ '', ' está ', '.' ] -- partes consiste do array das strings passadas na 
[ 'Gui', 'Aprovado' ] -- ...valores contem as variáveis interpoladas
Outra string --retorno da função
*/

//console.log(tag(`${aluno} está ${situacao}.`))
/*
Gui está Aprovado. -- partes
[] -- vazio pois não foi passado um segundo parametro
Outra string --retorno da função
*/

console.log(tag `${aluno} está ${situacao}.`)