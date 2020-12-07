const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()//esta execução irá imprimir o valor da constante declarada no contexto global, pois dentro da função exec não existe um valor então o javascript busca este valor no contexto mais abrangente