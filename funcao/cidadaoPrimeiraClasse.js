//função em JS é Firs-Class Object Citizens
//Higher-order function

//criar de forma literal
function fun1(){ return 1}
//Armazenar um uma variável
const fun2 = function () { return 2}

//Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3)) //retorna a soma de 2 + 3 como definido na função
console.log(array[1](2,3)) //retorna 1 conforme definido na fun1
console.log(array[2](2,3)) //retorna 2 conforme definido na fun2

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

const falar = function () {return 'Opa'}
console.log(falar())

//Passar função como parametro de uma outra função
function run(fun){
    fun()
}

run(function() {console.log('Executando...')}) //a chamada para a função run passa a função fun como parametro ela é executada dentro da função run

//Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
//o codigo abaixo daria o mesmo resultado, mas não deu certo
const cincoMais = soma(2, 3)
cincoMais(4)