/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/


multiplicaVetor = (vetor, numero) => {

    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * numero)
    }
    return resultado
}

multiplicaVetorSeForMaiorQue5 = (vetor, numero) => {

    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            resultado.push(vetor[i] * numero)
        } else {
            resultado.push(vetor[i])
        }
    }

    return resultado
}

console.log(multiplicaVetor([1,5,6,7,8,8,5,3,3,3],4))
console.log(multiplicaVetorSeForMaiorQue5([1,5,6,7,8,8,5,3,3,3],4))