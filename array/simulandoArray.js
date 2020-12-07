const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)//exibe o array completo
console.log(quaseArray[0])//exibe o elemento no indice 0


//adicionando a propriedade toString para o objeto quaseArray
Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(this)},//retorna os valores do objeto atual em um array
    enumerable: false
})



const meuArray = ['Rafael', 'Ana', 'Bia']

console.log(quaseArray.toString(), meuArray)