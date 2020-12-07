const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)//retorna undefined pois até este ponto não foi definido um prototype para o objeto ferrari
console.log(ferrari.__proto__) //retorna vazio pois não foi definido nenhum pai para o objeto ferrari
console.log(ferrari.__proto__ === Object.prototype)//retorna true pois a evocação do atributo __proto__ a partir do objeto em si representa o Object.prototype que significa portanto que ferrari é o objeto raiz
console.log(volvo.__proto__ === Object.prototype)//também retorna true devido a mesma explicação acima
console.log(volvo.__proto__ === ferrari.__proto__) //retorna true pois até este ponto os dois objetos apontam o mesmo Object.prototype
console.log(Object.prototype.__proto__)//retorna null pois o Object.prototype é o primeiro objeto da hierarquia de objetos em javascript


function MeuObjeto(){}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

