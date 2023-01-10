const express = require('express')
const app = express()
const port = 3000 //variavel ambiente

const path = require('path')

const basePath = path.join(__dirname, 'templates')

//ler body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.get('/users/add' , (req,res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save' , (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e tem ${age} `)

    res.sendFile(`${basePath}/userform.html`)
})

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

