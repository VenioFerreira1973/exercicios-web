//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}


imprimirSoma(3,4)
imprimirSoma(2) //retorna NaN - como o segundo parametro não foi definido o javascript não consegue efetuar a soma
imprimirSoma(1,3,4,5,6,7,41) //retorna 4 - o restante o javascript ignora
imprimirSoma()//não da erro retorna NaN pois os parametros não foram definidos

function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3)) //retorna 5
console.log(soma(2)) //retorna 3 pois usa o valor padrão de b definido na assinatura da função
console.log(soma())//retorna NaN pois o parametro a está indefinido

