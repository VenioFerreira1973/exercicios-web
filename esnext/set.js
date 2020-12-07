//não aceita repetição/não indexada
const times = new Set()
times.add('Fluminense')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Fluminense')//como já foi adicionado esta linha não terá efeito

console.log(times)
console.log(times.size)//retorna o tamanho do set
console.log(times.has('Vasco'))//false pois Vasco não está no set

times.delete('Flamengo')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)


times.forEach((valor) => {
    if (valor === 'Fluminense'){
        console.log(`${valor} - O melhor do mundo!!!`)
    } else {
        console.log(`${valor} time fraco`)
    }
    
})