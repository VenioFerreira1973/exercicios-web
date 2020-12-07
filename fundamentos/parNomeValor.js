//par nome/valor
let saudacao = 'Opa'//contexto lexico 1

function exec(){
    let saudacao = 'Faaala' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 40,
    peso: 90,
    endereço: {
        logradouro: 'Rua legal',
        numero: 100
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


