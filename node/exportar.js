console.log(module.exports === this)//contexto atual
console.log(module.exports === exports)//equivalencia

//todos as atribuições abaixo apontam para a mesma referência de memória
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null//não altera o contexto 
console.log(module.exports)

//a modificação da referência abaixo também não afeta o contexto do exports
exports = {
    nome: 'Teste'
}
console.log(module.exports)

//a forma correta de alterar o contexto do exports é a seguinte:
module.exports = {
    publico: true
}
