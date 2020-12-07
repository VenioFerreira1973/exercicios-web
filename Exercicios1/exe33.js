/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

let vetorInteiro = [12,34,54,56]
let vetorString = ['Azul', 'Amarelo', 'Verde', 'Vermelho']
let vetorDouble = [1.22,3.55, 6.77, 8.22]

let resultado = vetorInteiro.concat(vetorString).concat(vetorDouble)

console.log(`Vetor Resultante: ${resultado}`)
