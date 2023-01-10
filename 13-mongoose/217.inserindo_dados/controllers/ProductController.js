const Product = require('../models/Product')

module.exports = class ProductController {
   
    
    static async showProducts(req,res){

        const products = await Product.find().lean()
        res.render('products/all' , {products})
    }
    

    static createProducts(req,res){
        res.render('products/create')
    }

    static async createProductsPost(req,res){

        const name = req.body.name      
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image

       // console.log(req.body.name)

        const prod = new Product({name, price, description, image})

       // const product = new Product({name, image , price,description})

        await prod.save()

        res.redirect('/')

    }
    

    static  async getProduct( req , res ){
        //req.params vem por url
        //req.param deu bug :(
        //req.body vem por formularios
        const id = req.params.id

        console.log(req.params.id)

        const product =  await Product.findById(id).lean()

        res.render('products/product' , { product })
    }

    static async editProduct(req , res){
        const id = req.params.id
        
        const product = await Product.findById(id).lean()

        res.render('products/edit' , { product })


    }

    static async editProductPost(req, res){

        const id = req.body.id
        const name = req.body.name
       
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image

        const product = {name,price,description , image} 

        await Product.updateOne({ _id : id} , product )

        res.redirect('./../')
    }

   

    static async removeProduct( req, res){

        const id = req.params.id

       // console.log(req.params)

       await Product.deleteOne({_id : id})

        res.redirect('/')
       
    }




    
}
