const { application } = require('express')
const express = require('express')

const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/create' , ProductController.createProducts)

router.post('/products/create' , ProductController.createProductsPost )

router.get('/' , ProductController.showProducts)

router.get('/product/:id' , ProductController.getProduct)

router.get('/product/edit/:id' , ProductController.editProduct )

router.post('/product/edit' , ProductController.editProductPost )


router.get('/product/remove/:id' , ProductController.removeProduct )



module.exports = router