const nums = [1, 2, 3, 4, 5]

//for com propósito - obs: o map não modifica o array original ele cria outro por isso deve ser usado em atribuições
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

console.log(nums.map(soma10))
console.log(nums.map(triplo))
console.log(nums.map(paraDinheiro))

console.log(nums.map(soma10).map(triplo).map(paraDinheiro))
