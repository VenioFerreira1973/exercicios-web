const tecnologias = new Map()
tecnologias.set('react', {frameword: false})
tecnologias.set('angular', {frameword: true})

console.log(tecnologias.react)//da erro
console.log(tecnologias.get('react'))//retorna o objeto
console.log(tecnologias.get('react').frameword)//retorna o valor

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objetos'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))//a função has verifica de uma elemento está contido dentro do map
chavesVariadas.delete(123)//exclusão de elemento do map
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)//retorna a quantidade de objetos dentro do map

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')//será inserido no lugar do 'a' o objeto map não aceita chaves duplicadas
chavesVariadas.set(456,'b')//será inserido pois a chave 456 não existe no map
console.log(chavesVariadas.size)
console.log(chavesVariadas)