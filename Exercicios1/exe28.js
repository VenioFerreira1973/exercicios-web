/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/
let vetor = [1,4,5,6,7,8,9,3,2,3,4,5,6,1,2,3,5,10]
let contaPares = 0
let contaImpares = 0
let i = 0
while (i < vetor.length){

    if (vetor[i] % 2 == 0){
        contaPares++
    } else{
        contaImpares++
    }
    i++
}

console.log(`Numeros Pares: ${contaPares}`)
console.log(`Numeros Pares: ${contaImpares}`)
