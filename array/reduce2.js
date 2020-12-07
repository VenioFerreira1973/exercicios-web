const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false},
]

//Desafio 1: Todos os alunos são bolsistas?
const resultado = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado && bolsista)

console.log('Todos os alunos são bolsistas? ', resultado)

//Desafio 2: Algum aluno é bolsista?
const resultado1 = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado || bolsista)
console.log('Algum aluno é bolsista? ', resultado1)
