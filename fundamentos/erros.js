function tratarErroELancar(erro){
    //throw new Error('Erro de processamento')
    //throw 10 - é permitido
    //throw true - é permitido
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()) + '!!!'
    } catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('Final') //o finally é executado independentemente se houve erro ou não na execução da função
    }
}

const obj = {nome: 'Roberto'}
//const obj = {nome: 'Roberto'} - chamar a execução com o nome do atributo incorreto vai disparar as ações de tratamento de erros
const teste = imprimirNomeGritado(obj)
console.log(teste)