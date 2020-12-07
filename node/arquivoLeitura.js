const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
const outroCaminho = '../array'//ao inves de usar o __dirname você pode também usar um caminho próprio de acordo com a pasta que se deseja ler 
const outroArquivo = __dirname + '/file.txt'

const conteudo2 = fs.readFileSync(outroArquivo, 'utf-8')
console.log(conteudo2)

//sincronamente
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincronamente
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})


//outra forma
const config = require('./arquivo.json')
console.log(config.db)

//leitura de diretorios
fs.readdir(outroCaminho, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
    console.log(__dirname)
})