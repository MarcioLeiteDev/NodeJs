const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars' , exphbs.engine())
app.set('view engine' , 'handlebars')

app.get('/dashboard' , (req,res) => {
    const items = [ "item a" , "item b" , "Item C"]
    res.render('dashboard' , { items })
})

app.get('/', (req, res) => {
    const user = {
        name: 'Marcio',
        surname: 'Leite',
        age: 44
    }

    const auth = true

    const approved = true

    const palavra = "Alguma palavra nessa porra mano..."
    res.render('home' , { user: user , palavra: palavra , auth , approved })
})

app.listen(3000 , () => {
    console.log('App funcionando')
})