let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'
//module.exports = {c: 456, d: false, e:'teste'} --o codigo acima é equivalente a este

console.log(a)
console.log(global.b)

//as duas linhas abaixo são equivalentes
console.log(this.c)
console.log(module.exports.c)

console.log(module.exports === this)//retorna true pois as duas formas se equivalem
console.log(module.exports) //esta linha mostra no console o objeto module.exports, como ele foi definido:{e: 456, f: false, g:'teste'}

//criando uma variavel maluca sem var e let
abc = 3 //não faça isso - desta forma a varivel assume um contexto global no javascript o que pode ser perigoso em um softwara
console.log(global.abc)



