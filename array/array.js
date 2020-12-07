console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('Bia', 'Carlos', 'Ana') //uma forma válida de declaração de um Array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']//esta forma é a mais usual - literal
console.log(aprovados)
console.log(aprovados[0])//acessando o primeiro elemento do array
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//undefined

aprovados[3] = 'Paulo'
console.log(aprovados)

aprovados.push('Abia')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)//retorna 10 pois foi adicionado um elemento no indice 9
console.log(aprovados[8] === undefined)//true pois realmente neste indice não foi definido qualquer elemento
console.log(aprovados[8] === null)//false pois o que existe neste indice não é nulo mas sim undefined

aprovados.sort()//esta função ordena alfabeticamente ou numericamente um array
console.log(aprovados)//o novo array ordenado
console.log(aprovados[9])//Rafael não está mais no indice 9 como originalmente após a ordenação

delete aprovados[1] //ao deletar o javascript atribui undefined no indice, ele não reordena o array
console.log(aprovados[1])

//splice (a,b) - o primeiro parametro é o indice a partir do qual será feita a exclusão o segundo é a quantidade de elementos a ser excluida
aprovados = ['Bia', 'Carlos', 'Ana']
//aprovados.splice(1,1)//exclui 1 elemento a partir do indice 1
aprovados.splice(1,2)//exclui 2 elementos a partir do indice 1 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
//aprovados.splice(1,1, 'Elem1', 'Elem2')//exclui 1 elemento a partir do indice 1 e adiciona os dois novos elementos
aprovados.splice(1,0, 'Elem1', 'Elem2')//não exclui elementos  e adiciona os dois elementos a partir do indice 1 
console.log(aprovados)

