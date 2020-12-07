const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const ehMulher = funcionarios => funcionarios.genero === 'F'
const ehChinesa = funcionarios => funcionarios.pais === 'China'
const menorSalario = (func,funcAtual) => { 
    //console.log(func) 
    //console.log(funcAtual) 
    return func.salario <= funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data    

    const resultado = funcionarios.filter(ehMulher).filter(ehChinesa).reduce(menorSalario)
    console.log(resultado)
    
})