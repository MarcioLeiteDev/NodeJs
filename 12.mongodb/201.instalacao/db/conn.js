const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/testemongodb'

const client = new MongoClient(uri)

async function run() {

    try {
         client.connect()
        console.log("Conectado com sucesso ao mongodb!!!")

    } catch (error) {
        console.log("Não conectado ):" + error)
    }
}

run()

module.exports = client
