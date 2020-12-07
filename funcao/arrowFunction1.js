//função dobro tradicional
let dobro = function(a){
    return 2 * a
}

//abaixo duas opções da função dobro usando o conceito de funções arrow
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

//abaixo duas possibilidades de uso de funções arrow - são equivalentes
ola = () => 'Olá'
ola = _ => 'Olá' //possui um parametro

console.log(ola())
