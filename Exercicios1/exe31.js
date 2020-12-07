/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

let vetor = [12,34,-54,2,1,23,-12,5,6,7,-4,32,-7,8,1,3,2,-4,-56,21,13,-15,-16,13,-18, 101010]
let contaNegativos = 0

for (let i = 0 ; i < vetor.length; i++){

    contaNegativos = vetor[i] < 0 ? contaNegativos + 1 : contaNegativos + 0
}

console.log(`Negativos: ${contaNegativos}`)