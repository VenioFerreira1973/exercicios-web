const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)//desta forma o objeto filha1 herda automaticamente os atributos do pai
filha1.nome = 'Ana'
//filha1.corCabelo = 'loiro' - esta linha alteraria a cor do cabelo da filha não do pai 
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true},
    idade: {value: 35, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' //esta linha não terá efeito pois a propriedade writable esta definida como false
filha2.idade = 25
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))//o javascript lista os atributos do objeto filha2 pois a propriedade enumerable está definida como true

for (let key in filha2){//percorre os atributos do objeto tanto os próprios quanto os herdados
    filha2.hasOwnProperty(key)? //verifica se o objeto tem alguma propriedades
        console.log(key) : console.log(`Por herança: ${key}`)//imprime os atributos próprios e herdados
}


