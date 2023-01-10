const Tought = require('../models/Tought')

const User = require('../models/User')

module.exports = class ToughtsController {

    static async showToughts(req, res) {

        const toughts = await Tought.findAll({
            include:User,
        })

        const  toughtsData = toughts.map((result) => result.get({plain:true}))
        
        res.render('toughts/home' , {toughtsData} )
    }

    static async dashboard(req, res) {

        const UserId = req.session.userid

        const user = await User.findOne({
            where: {
                id: UserId,
            },
            include: Tought,
            plain: true,
        })
        //check if user exists
        if (!user) {
            res.redirect('/login')
        }

        const toughts = user.Toughts.map((result) => result.dataValues)

        let emptyTought = false

        if(toughts.length === 0){
            
            emptyTought = true 
        }

        //console.log(toughts)

        res.render('toughts/dashboard', { toughts , emptyTought })

    }

    static createTought(req, res) {
        res.render('toughts/create')
    }

    static async createToughtSave(req, res) {

        const tought = {
            title: req.body.title,
            UserId: req.session.userid
        }

        try {

            await Tought.create(tought)

            req.flash('message', 'Pensamento criado com sucesso...')

            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })
        } catch (error) {
            console.log('Aconteceu um erro: ' + error)
        }


    }

    static async removeTought(req, res) {

        const id = req.body.id
        const UserId = req.session.userid

        try{

           await  Tought.destroy({where: {id:id , UserId:UserId }})

            req.flash('message' , 'Removido com Sucesso')

            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })
            
        }catch(error){
            console.log('Deu erro aqui mano' + error)
        }

    }

    static async updateTought(req,res){
        const id = req.params.id


        const tought = await  Tought.findOne({ where: { id: id } , raw:true })

        res.render('toughts/edit' , {tought} )
    }

    static async updateToughtSave(req,res){
        const id = req.body.id

        const tought = {
            title: req.body.title
        }

        await Tought.update(tought, {where: {id: id}})
        
        req.flash('message' , 'Editado com Sucesso')

        req.session.save(() => {
            res.redirect('/toughts/dashboard')
        })
    }

}