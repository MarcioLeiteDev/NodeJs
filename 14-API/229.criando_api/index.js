const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

//rotas e endpoints

app.get('/' , (req,res) => {
    res.json({message: 'Primeira rota criado com sucesso'})
})


app.post('createproduct' , (req,res) => {
    
})


app.listen(3000)