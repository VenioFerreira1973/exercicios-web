//let - escopo de bloco - laços ifs 
// const
//var - escopo de função ou escopo global

{
    var a = 2
    let b = 3
    console.log(a)
    console.log(b)//acessível somente dentro do bloco
}

console.log(a)//a variável a está acessivel nos dois escopos dentro e fora do bloco
//console.log(b) - fora do bloco a variável declarada com let não é acessível

//Template String
const produto = 'iPad'
console.log(`${produto} 
é 
caro!`)//interpolação de variáveis dentro de strings
console.log(produto, '\né \ncaro')

//Destructuring
const [l, e, ...tfasdfsadfsdaf] = "Cod3r"
console.log(l,e, tfasdfsadfsdaf)

const [x, y] = [1, 4, 3]
console.log(x,y)

const {nome, idade: i} = {nome: 'Ana', idade: 9}
console.log(nome, i)