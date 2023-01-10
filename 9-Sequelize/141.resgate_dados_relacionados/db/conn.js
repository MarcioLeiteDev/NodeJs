const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize' , 'root' , '' , {
    host: 'localhost',
    dialect:'mysql'

})

//try{

 //   sequelize.authenticate()
//    console.log('conectamos com suesso com Sequelize')

//}catch(err){
//    console.log('Não foi possivel se conectar: ' , err)
//}

module.exports = sequelize