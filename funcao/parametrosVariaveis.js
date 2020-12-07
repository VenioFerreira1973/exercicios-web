function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1,4,5,6,4,3,22,2,3,4,55,5,4,3,2,2,2,22,3,44,55,55,4,33,2,2,2,2,2))
//em ambos os casos vai ter um 0 no inicio da contatenação
console.log(soma(1.1,2.2,'Teste'))//concatena pois o operador + também tem esta função
console.log(soma('a','b','c'))//concatena pois o operador + também tem esta função
