function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) //assume que este valor é o minimo e randomiza numeros de 992 a 1000
console.log(rand([,10]))//assume que o valor 10 é o valor maximo e randomiza numeros de 0 a 10
console.log(rand([]))//assume os valores padrão definidos na assinatura da função 0 e 1000
console.log(rand())//erro pois não há elementos para desestruturação

