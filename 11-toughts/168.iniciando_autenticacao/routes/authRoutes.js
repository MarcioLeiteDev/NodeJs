const express = require('express')
const route = express.Router()

const AuthController = require('../controllers/AuthController')
const router = require('./toughtsRoutes')

router.get('/login' , AuthController.login)
router.get('/register' , AuthController.register)


module.exports = route
