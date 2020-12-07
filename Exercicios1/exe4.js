dividir = (dividendo, divisor) => {
    if (divisor == 0){
        return 'Não é possível dividir por zero'
    } else {
        return 'Resultado da divisão: ' + dividendo / divisor + ' Resto da divisão: ' + dividendo % divisor 
    }
}

console.log(dividir(10,3))
console.log(dividir(12,3))
console.log(dividir(11,3))
console.log(dividir(2,3))
console.log(dividir(10,0))