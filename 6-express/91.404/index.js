const express = require('express')
const app = express()
const port = 3000 //variavel ambiente

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const users = require('./users')

//ler body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//arquivos estaticos
app.use(express.static('public'))

app.use('/users/', users)


app.get('/', (req,res) => {
   // res.send('Ola Mundo')
   res.sendFile(`${basePath}/index.html`)
})


app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

