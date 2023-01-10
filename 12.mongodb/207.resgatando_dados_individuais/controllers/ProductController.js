const Product = require('../models/Product')

module.exports = class ProductController {
    
    static async showProducts(req,res){

        const products = await Product.getProduct()
        res.render('products/all' , {products})
    }

    static createProducts(req,res){
        res.render('products/create')
    }

    static async createProductsPost(req,res){

        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description

        const product = new Product(name, image , price,description)

        product.save()

        res.redirect('/')

    }

    static  async getProduct( req , res ){
        //req.params vem por url
        //req.param deu bug :(
        //req.body vem por formularios
        const id = req.params.id

       // console.log(req.params.id)

        const product =  await Product.getProductById(id)

        res.render('products/product' , { product })
    }
}
