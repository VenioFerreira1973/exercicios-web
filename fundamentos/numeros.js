const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log('media: ', media.toFixed(3)) //fixa o valor com um determinado numero de casas decimais neste caso 3

console.log('media: ', media.toString())//converte o valor numerico em um valor string ou texto

console.log('media: ', media.toString(2))//converte o valor numerico em valor binário

console.log(typeof media)
console.log(typeof Number)