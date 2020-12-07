require('./global')

//não é necessario colocar global.MinhaApp
console.log(MinhaApp.saudacao())

//embora o nome no arquivo global esteja definido é possível mudar no contexto onde ele foi requerido, portanto é necessário cuidado com esta prática
//para evitar este comportamento é possível aplicar Object.freeze no objeto global
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)

