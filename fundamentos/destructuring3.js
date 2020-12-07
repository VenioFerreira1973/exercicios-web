function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))

let obj1 = {min: 0, max: 10}
console.log(rand(obj1))


console.log(rand({}))//o javascript toma como valores min e max para gerar o numero aleatorio
//console.log(rand()) //da erro pois o metodo destructuring espera alguma informaçao
