console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)//retorna false pois os tipos são diferentes
console.log('04)', '3' !== 3)//retorna true pois os tipos são diferentes 

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
//ambas as comparações darão false pois a comparações neste caso é entre as referências de memória das variaveis
console.log('09)', d1 == d2)
console.log('10)',d1 === d2)

console.log('11)', d1.getTime() === d2.getTime())//retorna true pois neste caso a função getTime retorna um número

console.log('12)',null == undefined)//retonra true
console.log('13)',null === undefined)//retorna false
