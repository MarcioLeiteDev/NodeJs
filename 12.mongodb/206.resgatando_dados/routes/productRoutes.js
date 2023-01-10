const { application } = require('express')
const express = require('express')

const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/create' , ProductController.createProducts)

router.post('/products/create' , ProductController.createProductsPost )

router.get('/' , ProductController.showProducts)

module.exports = router