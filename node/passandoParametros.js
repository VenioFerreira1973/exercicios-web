//funcionalidade única retorna os nomes passados como parâmetros em um array mapeando a mensagem em cada um
module.exports = function(...nomes) {//...nomes é um argumento variável assim é possível passar quantos parametros forem necessários para a função

    return nomes.map(nome => `Boa semana ${nome}!`)
}

