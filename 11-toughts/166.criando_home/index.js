//npm install bcryptjs connect-flash cookie-parser cookie-session express express-flash express-session mysql2 sequelize nodemon session-file-store express-handlebars

const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

//Models
const Tought = require('./models/Tought')
const User = require('./models/User')



//import routes
const toughtsRoutes = require('./routes/toughtsRoutes')

//import controllers
const ToughtsController = require('./controllers/ToughtsController')

app.engine('handlebars' , exphbs.engine())
app.set('view engine' , 'handlebars')

//receber resposta do Body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Session middleware
app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function (){},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie:{
            secure:false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000 ),
            httpOnly: true
        }
    }),
)

//flash message
app.use(flash())

//public path
app.use(express.static('public'))

// set session to resposra
app.use(( req, res, next ) => {
    if(req.session.userid){
        res.locals.session = req.session
    }
    next()
})

//Routes
app.use('/toughts' , toughtsRoutes)

app.get('/' , ToughtsController.showToughts)

conn.sync()
//conn.sync({ force: true })
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))