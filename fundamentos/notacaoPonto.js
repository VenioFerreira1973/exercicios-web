console.log(Math.ceil(6.1))//arredonda para cima
console.log(Math.floor(6.1))//arredonda para baixo
console.log(Math.round(6.6))//arredonda para cima ou para baixo de acordo com a parte decimal maior que 0.5 para cima menor que 0.5 para baixo

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola' //desta forma se obtem o mesmo resultado

console.log(obj1.nome)


function Obj (nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...', nome)
    }
}

const obj2 = new Obj('Mesa')
const obj3 = new Obj('Cadeira')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
obj2.exec()