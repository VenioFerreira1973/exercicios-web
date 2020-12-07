potencia = (base, expoente) => {
    return Math.pow(base, expoente)
}

potencia1 = (base, exp) => {
    let pot = 1
    for (let i = 0; i < exp; i++) {
        pot = pot * base
    }
    return pot
}

function expoente (base, expoente) {
    
    let resultado = base ** expoente
    return resultado
}


console.log(potencia1(2,3))
console.log(potencia1(2,10))
console.log(potencia1(2,20))
console.log(potencia1(2,30))
console.log(potencia1(2,64))