const express = require('express')
const cors = require('cors')

const app = express()

// BD connection
const conn = require('./db/conn')

// Config Json Response
app.use(express.json())

// Solve CORS
app.use(cors( {credentials: true, origin: 'htpp://localhost:3000'}))

// Public folder for image
app.use(express.static('public'))

//
const userRoutes = require('./routes/userRoutes')

app.use('/users' , userRoutes)

app.listen(5000)