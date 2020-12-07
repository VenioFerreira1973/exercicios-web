//Função anonima é simplesmente uma função sem nome
const soma = function (x,y) {
    return x + y
}

console.log(soma(1,2))//chamada direta a função retorna a soma dos dois parametros

const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3, 4) //retorna a soma dos dois parametros, assumindo que a operação da imprimir resultado é equivalente a chamar a função soma
imprimirResultado(3, 4, soma) ////retorna a soma dos dois parametros, passando a variavel soma de forma explicita
imprimirResultado(3, 4, function(x,y){
    return x- y
}) //passado o terceiro parametro como uma função o javascript executa esta função retornando a subtração dos dois parametros
imprimirResultado(3, 4, (x,y)=> x *y) //usando função arrow o javascript aplica a multiplicação dos dois parametros

const pessoa = {
    falar: () =>{
        console.log('Opa')
    }
}
//Abaixo 3 formas diferentes de declaração de funções
const pessoa = {
    falar() {
        console.log('Opa')
    }
}

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()