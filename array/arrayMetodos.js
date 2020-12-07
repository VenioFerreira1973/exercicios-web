const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Hamilton']
pilotos.pop()//retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift()
console.log(pilotos)//retira o primeiro elemento do array

pilotos.unshift('Piquet')//adiciona um elemento no inicio do array
console.log(pilotos)


pilotos.splice(2,0, 'Bottas', 'Massa')//insere os dois elementos a partir do indice 2
console.log(pilotos)

pilotos.splice(2,2) //remove dois elementos a partir do indice 2
console.log(pilotos)

let outrosPilotos = pilotos.slice(2)//atribui ao novo array todos os pilotos a partir do indice 2
console.log(outrosPilotos)

let outrosPilotos2 = pilotos.slice(1, 3)//atribui ao novo array todos os pilotos a partir do indice 1, porém não inclui o do indice 3
console.log(outrosPilotos2)
