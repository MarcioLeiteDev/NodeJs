const express = require('express')
const exphbs = require('express-handlebars')
//const mysql = require('mysql')
//const poll = require('./db/conn')
const conn = require('./db/conn')

const app = express()

const User = require('./models/User')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.post('/users/add', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }

    console.log(req.body)

    await User.create({name,occupation, newsletter})

    res.redirect('./../')


})

app.get('/users/create' , (req, res) => {
    res.render('adduser')
})

app.get('/', (req, res) => {
    res.render('home')
})


conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))
//app.listen(3000)