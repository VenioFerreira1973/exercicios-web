Array.prototype.reduce2 = function(callback, valorInicial){
    let acumulador = valorInicial ? valorInicial : this[0]
    const indiceInicial = valorInicial ? 0 : 1
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?
const resultado = alunos.map(a => a.bolsista).reduce2((resultado, bolsista) => resultado && bolsista)

console.log('Todos os alunos são bolsistas? ', resultado)

//Desafio 2: Algum aluno é bolsista?
const resultado1 = alunos.map(a => a.bolsista).reduce2((resultado, bolsista) => resultado || bolsista)
console.log('Algum aluno é bolsista? ', resultado1)


const soma = (total, valor) => total + valor
const num = [1, 2, 3, 4, 5, 6]
console.log(num.reduce2(soma))
console.log(num.reduce2(soma, 21))