const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController');

router.get('/' , ProductController.homeProduct)

router.get('/products' , ProductController.showProduct)

module.exports = router

