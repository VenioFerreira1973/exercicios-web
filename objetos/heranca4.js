function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)//true
console.log(MeuObjeto.prototype === obj1.__proto__)//true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)//true pois o atributo __proto__ de um novo objeto do tipo MeuObjeto aponta para MeuObjeto.prototype
console.log(MeuObjeto.__proto__ === Function.prototype)//true pois MeuObjeto é uma função e o atributo __proto__ da função apontoa para Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype)//true pois o prototipo de um prototype de uma função aponta para um Object.prototype
console.log(Object.prototype.__proto__ === null)//true pois o prototipo de um prototype de um objeto é o objeto raiz assim ele aponta para uma referência nula, importante não é undefined



