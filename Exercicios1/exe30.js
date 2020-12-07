/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

let vetor = [12,34,54,2,1,23,12,5,6,7,4,32,7,8,1,3,2,4,56,21,13,15,16,13,18, 101010]
let maior = 0
let menor = 0
for (let i = 0 ; i < vetor.length; i++){

    maior = maior >= vetor[i] ? maior : vetor[i]
    menor = menor <= vetor[i] ? menor : vetor[i]
}

console.log(`Maior: ${maior}`)
console.log(`Menor: ${menor}`)