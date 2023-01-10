const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars' , hbs.engine)
app.set('view engine' , 'handlebars')

app.get('/dashboard' , (req,res) => {
    const items = [ "item a" , "item b" , "Item C"]
    res.render('dashboard' , { items })
})

app.get('/post' , (req,res) => {
    const post = {
        title: 'Aprender NodeJs',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar aprender Node Js',
        comments: 4
    }

    res.render('blogpost' , {post})
})

app.get('/blog' , (req, res) => {
    const posts = [
        {
            title: 'Aprender NodeJs',
            category: 'Javascript',
            body: 'Este artigo vai te ajudar aprender Node Js',
            comments: 4

        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Este artigo vai te ajudar aprender Python',
            comments: 4

        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar aprender PHP',
            comments: 4

        }
    ]

    res.render('blog' , {posts})
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