const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate(
        console.log('conectado com sucesso')
    )
} catch (error) {
    console.log(`Não foi possivel se conectar ${error}`)
}

module.exports = sequelize