const Tought = require('../models/Tought')

const User = require('../models/User')

const {Op} = require('sequelize')

module.exports = class ToughtsController {

    static async showToughts(req, res) {

        let search = ''

        if(req.query.search){
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order === 'old'){
            order = 'ASC'
        }else{
            order = 'DESC'
        }

        const toughts = await Tought.findAll({
            include:User,
            where:{
                title: {[Op.like] : `%${search}%`},
            },
            order: [ ['createdAt' , order ]],
         
        })

        const  toughtsData = toughts.map((result) => result.get({plain:true}))

        let toughtsQty = toughtsData.length

        if(toughtsQty === 0){
            toughtsQty = false
        }
        
        res.render('toughts/home' , {toughtsData , search , toughtsQty} )
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