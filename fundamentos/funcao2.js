//armazenando uma funcao em uma variavel

const imprimeSoma = function(a,b){
    console.log(a+b)
}

imprimeSoma(2,3) //retorna 5

//armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtrai = (a,b) => a-b
console.log(subtrai(2,4))


const imprimir = a => console.log(a)
imprimir('Legal!!!')