const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

const usuarioApi = require('./api/usuario')

require('./api/produto')(app, 'parametros')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(saudacao('Vênio'))


app.get('/html', (req, res) => {   
    //O código abaixo demonstra um retorno em HTML
    res.send('<h1>Estou bem!</h1><br><br> get <h2>Tipo é HTML!</h2>')
})

app.get('/json', (req, res) => {
    //O código abaixo demonstra um retorno em JSON
    res.json({
        name: 'iPad 32gb',
        price: 1899.00,
        discount: 0.12

    })

})
//o next torna a chamada um middleware a requisição irá chamar a próxima função do tipo use
app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

/* app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })
    req.on('end', function(){
        res.send(corpo)
    })
}) */

app.post('/corpo', (req, res) => {
        //res.send(req.body)//retorna o json inteiro passado na requisição
        //res.send(req.body.nome)//retorna o atributo nome do json passado na requisição
        res.send(JSON.stringify(req.body))//retorna os atributos do json passado na requisição 

})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})



app.get('/opa', (req, res, next) => {   
    console.log('Durante...')
    
    //O código abaixo demonstra um retorno em JSON
    res.json([
        {id: 7, name: 'Ana', position: 1},
        {id: 34, name: 'Bia', position: 2},
        {id: 73, name: 'Carlos', position: 3}
    ])
    next()

}) 

app.use((req, res) => {
    console.log('Depois...')
})


app.get('/json3', (req, res) => {
    //O código abaixo demonstra um retorno em JSON
    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 34, name: 'Bia', position: 2 },
            { id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200

    })

})


app.post('/post', (req, res) => {
    res.send('Estou <b>bem</b> post')
})
app.use((req, res) => {
    res.send('Estou <b>bem</b> use')
})
app.all('/all', (req, res) => {
    res.send('Estou <b>bem</b> all')
})


app.listen(3000, () => {
    console.log('Backend executando...')
})

