console.log(this === global)//false pois o this aponta para module.exports

console.log(this === module)//false pelo mesmo motivo acima

console.log(this === module.exports)//true

console.log(this === exports)//true pois exports aponta para a mesma referência de module.exports

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)//quando declarado dentro de uma função o this não aponta para o exports
    console.log(this === module.exports)//tambem não pelo mesmo motivo
    console.log(this === global)//true 

    this.perigo = 'Teste'//teste esta sendo atribuido ao escopo global

    console.log(this)//ao imprimir o this será possível ver que foi incluído em seu escopo a variável perigo com conteúdo Teste

    console.log(global)//mesma visão acima
}

logThis()