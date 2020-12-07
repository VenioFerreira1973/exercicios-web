const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//as duas chamadas ao contador incrementam o valor, pois o node faz caching dos objetos retornados
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)//3 3

//neste caso o contador não é incrementado pois são novas instancias sendo criadas a cada chamada das funções
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)//3 1
