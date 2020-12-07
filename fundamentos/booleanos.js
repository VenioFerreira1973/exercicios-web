let isAtivo = false
console.log(isAtivo) //imprime false

isAtivo = true
console.log(isAtivo) //imprime true

isAtivo = 1
console.log(!!isAtivo) //imprime true
console.log(!isAtivo) //imprime false

console.log(!!false) //imprime false
console.log(!!true) //imprime true

console.log(!false) //imprime true
console.log(!true) //imprime false


console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!!' ') //espaço
console.log(!![]) //array
console.log(!!{}) //objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN) //not a number
console.log(!!undefined)
console.log(!!(isAtivo = false)) //aqui ele não está verficando se a comparação é false mas sim apenas verficanco se o isAtivo é false

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) //retorna true somente pq o valor ' ' é interpretado como verdadeiro
console.log(!!('' || null || 0 || 'teste'))//retorna true somente pq o valor 'teste' é interpretado como verdadeiro
console.log(!!('' || null || 0 || 123))//retorna true somente pq o valor 123 é interpretado como verdadeiro

let nome = 'Lucas'
console.log(nome || 'Desconhecido') //imprime Lucas pois esta string é interpretada como verdadeira pelo javascript

let nome = ''
console.log(nome || 'Desconhecido') //imprime Desconhecido pois a string '' é interpretada como false




