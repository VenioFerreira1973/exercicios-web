//Arrow function
const soma = (a, b) => a + b
console.log(soma(2,3))

const soma2 = (a, b) => {
    return a + b
}

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()//true pois em qualquer arquivo do node o this sempre irá apontar para exports ou module.exports
lexico2()//forçando o apontamento para outro objeto não afetará o comportamento


//parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()//neste caso o javascript retorna o valor padrão
log('Sou mais forte')//neste caso o javascript retorna o valor passado como parametro
log(undefined)//retorna o valor default
log(null)// retorna null pois o javascript interpreta que o código pretende imprimir o null e não o valor padrão


//operador rest (agrupar)
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)//soma os parametros passados na função que devido ao operador rest ... aceita um número indefinido de parâmetos
    return total
}

console.log(total(2, 3, 4, 5))

