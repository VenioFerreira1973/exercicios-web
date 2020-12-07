converteDinheiro = (valor) => {
    return 'R$' + valor.toFixed(2).toString().replace('.',',')
}

console.log(converteDinheiro(10.30000004044040))