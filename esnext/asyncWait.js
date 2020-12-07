//com promise
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch (e){
                    reject(e)

                }
            })
        })
    })
}

//Recurso do ES8
//Objetivo de simplificar o uso de promises
let obterAlunos = async() => { //ao usar async deve se usar await para chamar as funções
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    //const turmaD = await getTurma('D') -- simulando um erro catch
    return [].concat(turmaA, turmaB, turmaC)
}//retorna um objeto AsyncFunction pois isso deve ser chamada via promises

obterAlunos()
    //.then(alunos => console.log(alunos.map(a => a.nome))) -- da o mesmo resultado que as linha abaixo
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

