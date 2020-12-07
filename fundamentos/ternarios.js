const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

//abaixo outra forma de fazer
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

function resultado3(nota){
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

function resultado4(nota){
    if (nota >=7 ){
        return 'Aprovado'
    } else{
        return 'Reprovado'
    }
}

console.log(resultado(7,1))
console.log(resultado2(6,1))
console.log(resultado3(4,1))
console.log(resultado3(8,1))
