const User = require('../models/User')

//geraçãi de hash de senha
const bcrypt = require('bcryptjs')

module.exports = class AuthController{

    static login(req,res){
        res.render('auth/login')
    }

    static register(req,res){
        res.render('auth/register')
    }

    static async registerPost(req,res){

        const {name, email, password, confirmpassword} = req.body

        //password match validation
        if(password != confirmpassword){
            req.flash('message' , 'As senhas não conferem , tente novamente')
            res.render('auth/register')
            return
        }

    }

}