//Primeira forma de declaração de um objeto
const prod1 = {}
prod1.nome = 'Celular ultra power'
prod1.preco = 4999,99
prod1['Desconto legal'] = 40 //evitar atributos com espaço, mas o javascript permite

console.log(prod1.nome)


//Segunda forma de declaração de um objeto com aninhamento de objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }

}

console.log(prod2.nome)


//JSON é um texto não é um objeto abaixo a representação do objeto no formato JSON
'{"nome": "Camisa Polo", "preco": 79.90, "obj": {"blabla": 1, "obj": {"blabla": 2}}}'

