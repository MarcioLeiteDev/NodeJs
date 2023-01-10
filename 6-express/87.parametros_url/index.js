const express = require('express')
const app = express()
const port = 3000 //variavel ambiente

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req,res) => {

    const id = req.params.id

    // leitura da tabela users resgatar usuario do banco
    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`)
 })


app.get('/', (req,res) => {
   // res.send('Ola Mundo')
   res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})