const User = require('../models/User')

module.exports = class UserController{

    static async register(req,res){

        /*
        metodo hard code
        const name = req.body.name
        const email = req.body.email
        const phone = req.body.phone
        const password = req.body.password
        const confirmpassword = req.body.confirmpassword
        */

       const {name,email,phone,password,confirmpassword} = req.body

       //validations
       if(!name){
        res.status(422).json({message: 'o nome é obrigatorio'})
       }

       if(!email){
        res.status(422).json({message: 'o email é obrigatorio'})
       }

       if(!phone){
        res.status(422).json({message: 'o telefone é obrigatorio'})
       }

       if(!password){
        res.status(422).json({message: 'a senha  é obrigatorio'})
       }

       if(!confirmpassword){
        res.status(422).json({message: 'a confirmação de senha é obrigatorio'})
       }

       if(password !== confirmpassword){
        res.
        status(422).
        json({
            message: "A senha e confirmação de senha precisam ser iguais"
        })
        return
       }

       //check if user exists
       const userExists = await User.findOne( {email: email})

       if(userExists){
        res.
        status(422).
        json({
            message: "Ja existe um usuário cadastrado com esse email faça login ou utilize outro e-mail"
        })
        return
       }

       //create user

       // res.json('Ola Get a Pet')
    }

}