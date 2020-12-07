const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(`Acumulador: ${acumulador} Atual: ${atual}`)
    return acumulador + atual
})

console.log(`Soma das notas: ${resultado}`)

console.log(alunos.map(a => a.nota))
const resultado1 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(`Acumulador: ${acumulador} Atual: ${atual}`)
    return acumulador + atual
}, 10) //neste caso o valor inicial será 10 

console.log(`Soma das notas: ${resultado1}`)