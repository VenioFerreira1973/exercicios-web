for (let letra of 'Cod3r'){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']
//desta forma percorre-se o array imprimindo o indice
for (let i in assuntosEcma){
    console.log(i)
}

//usando o for of é possível acessar os valores do array e manipula-los, neste caso imprimir
for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

//imprime os elementos do Map
for (let assunto of assuntosMap){
    console.log(assunto)
}

//imprime as chaves do map
for (let chave of assuntosMap.keys()){
    console.log(chave)
}

//imprime os valores do map
for (let valor of assuntosMap.values()){
    console.log(valor)//tudo
    console.log(valor.abordado)//só o valor
}

//imprime chave/valor do map
for(let [ch,v] of assuntosMap.entries()){
    console.log(ch,v)
}

//imprime as letras do set
const s = new Set(['a', 'b', 'c'])
for (let letra of s){
    console.log(letra)
}