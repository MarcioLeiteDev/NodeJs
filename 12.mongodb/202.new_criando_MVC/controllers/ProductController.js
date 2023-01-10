const Product = require('../models/Products');

module.exports = class ProductController{
    
    static showProduct(req,res){
        res.render('products/all')
    }

    static homeProduct(req,res){
        res.render('products/home')
    }
}