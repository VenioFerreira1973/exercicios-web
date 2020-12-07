//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'//não é usual atribuir um adicionar um atributo diretamente no objeto "pai" - este tipo de codificação deve ser evitado
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'C'} //o attr3 não será mostrado a partir do filho, pois este objeto já tem o mesmo atributo que será exibido
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0)//é encontrado pois o objeto avo tem como prototype o Object que tem o attr0
console.log(filho.attr1, filho.attr2, filho.attr3)//retorna A, B e C devido a herança o attr1, attr2 e attr3 respectivamente, que só existe nos objetos ascendentes e ficam acessíveis devido aos prototypes


console.log(avo.prototype)//undefined
console.log(pai.prototype)//undefined
console.log(filho.prototype)//undefined

console.log(avo.__proto__)//vazio não tem prototype
console.log(pai.__proto__)//{ attr1: 'A' }
console.log(filho.__proto__)//{ attr2: 'B' }


console.log(avo.__proto__ === Object.prototype)//true
console.log(pai.__proto__ === Object.prototype)//false
console.log(filho.__proto__ === Object.prototype)//false

console.log(avo.__proto__ === pai.__proto__)//false
console.log(avo.__proto__ === filho.__proto__)//false
console.log(filho.__proto__ === pai.__proto__)//false



const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing - sombreamento - este atributo se sobrepõe ao mesmo atributo no objeto "pai" carro
    //,__proto__: carro -- esta seria outra forma de relacionar o objeto filho ao pai
}

const volvo = {
    modelo: 'V40',
    cor: 'Prata',
    status(){
    return `Modelo: ${this.modelo} Cor: ${this.cor} Status: ${super.status()}`
    }//,__proto__: carro -- esta seria outra forma de relacionar o objeto filho ao pai
}

//para estabelecer a relação de prototipo (herança entre os objetos utiliza-se a função setPrototypeOf)
Object.setPrototypeOf(ferrari, carro)//esta linha é equivalente a usar o atributo __proto__ indicando o relacionamento pai/filho
Object.setPrototypeOf(volvo, carro)//idem

console.log(ferrari)//desta forma serão mostrados apenas os atributos do objeto ferrari e não os atributos do objeto "pai" carro
console.log(volvo)//desta forma serão mostrados apenas os atributos do objeto volvo e não os atributos do objeto "pai" carro

volvo.aceleraMais(100)//chamando a função aceleraMais do objeto "pai" que foi herdada pelo objeto volvo
console.log(volvo.status())//verificando o status atual do objeto volvo após a chamada da função aceleraMais

ferrari.aceleraMais(300)
console.log(ferrari.status())