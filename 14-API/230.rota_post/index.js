const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

//rotas e endpoints

app.post('/createproduct', (req,res) => {

   const name = req.body.name
   const price = req.body.price

    console.log(name)
    console.log(price)

    res.status(201).json({ message: `O produto ${name} foi criado com sucesso ...`})

})

app.get('/' , (req,res) => {
    res.status(200).json({message: 'Primeira rota criado com sucesso'})
})


app.listen(3000)