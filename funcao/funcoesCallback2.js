const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


//com Callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

//abaixo exemplo usando funções arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//funções arrow ainda mais elegante - desta forma a funçao notasMenoresQue7 fica reutilizável
const notasMenoresQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenoresQue7)
console.log(notasBaixas4)


const bichos = ['Elefante', 'Leão', 'Tigre', 'Rinoceronte', 'Zebra', 'Tartaruga', 'Toupeira']
const animaisComT = bichos.filter(function(bichos){
    return bichos.charAt(0) == 'T' 
})

console.log(animaisComT)