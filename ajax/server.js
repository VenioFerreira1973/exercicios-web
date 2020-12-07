const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './upload')
    },
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err){
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso')
    })
})
/* As duas linhas abaixo funciona como um servidor de conteúdos, as requisições feitas no /teste serão respondidas como programado */
/* app.get('/teste', (req, res) => res.send(new Date)) */
/* app.get('/teste', (req, res) => res.send('Ok')) */

app.post('/formularios', (req, res) => {
    res.send({
        ...req.body,
        id: 1 
    })
})

app.get('/parOuImpar', (req, res) => {
    //formas que o servidor pode receber requisições do frontend
    //req.body 
    //req.query 
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))