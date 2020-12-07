const imprimirResultado = function(nota){
    if(nota>=7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa')//neste caso o javascript retornaria reprovado, pois é uma linguagem fracamente tipada