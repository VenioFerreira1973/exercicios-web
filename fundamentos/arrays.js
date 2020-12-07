const valores = [7.7,8.9, 6.3, 8.2]
console.log(valores[2], valores[3]) //retorna 6.3 e 8.2

console.log(valores[4]) //retorna undefined pois não existe um valor nesta posição do array

valores[4] = 2 //atribui o valor dois na posição 4 do vetor

valores[10] = 4 //atribui o valor 4 na posição 10, mas as posições entre a 3 e a 9 continuaram vazias

console.log(valores) //[ 7.7, 8.9, 6.3, 8.2, 2, <5 empty items>, 4 ]

console.log(valores.length) //retorna a quantidade de elementos do array

valores.push({id:1}, false, null, 'teste') //adiciona os elementos no final do array
console.log(valores)


console.log(valores.pop()) //remove o ultimo elemento do array
delete valores[0] //deleta o elemento na posição 0 do array
console.log(valores)

console.log(typeof valores) //o tipo do array valores é object