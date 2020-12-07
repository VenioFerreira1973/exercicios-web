Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++ ){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

//Exemplo de implementaçao da função charAt 
String.prototype.charAt2 = function(callback){
        callback(this[0])    
}

const stringTeste = 'Fluminense'
stringTeste.charAt2(function(primeiraLetra){
    console.log(primeiraLetra)
})