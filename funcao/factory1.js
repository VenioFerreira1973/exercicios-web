//Factory simples - literalmente é uma fabrica de objetos - ela sempre irá retornar um objeto
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())