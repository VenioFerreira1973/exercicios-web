/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

let vetor = [12,34,-54,2,1,23,-12,5,6,7,-4,32,-7,8,1,3,2,-4,-56,21,13,-15,-16,13,-18, 110]
let mediaAritmetica = 0
let soma = 0 
for (let i = 0 ; i < vetor.length; i++){

    soma = soma +  vetor[i]
}

mediaAritmetica = soma / vetor.length

console.log(`Média Aritmética: ${mediaAritmetica}`)