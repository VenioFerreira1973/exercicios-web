/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

let vetor = [12,34,54,2,1,23,12,5,6,7,4,32,7,8,1,0,3,2,4,56,21,13,15,16,13,18]
let dentroIntervalo = 0
let foraIntervalo = 0
for (let i = 0 ; i < vetor.length; i++){

    if(vetor[i] >= 10 && vetor[i] <=20){
        dentroIntervalo++
    } else {
        foraIntervalo++
    }
}

console.log(`Dentro do Intervalo: ${dentroIntervalo}`)
console.log(`Fora do Intervalo: ${foraIntervalo}`)