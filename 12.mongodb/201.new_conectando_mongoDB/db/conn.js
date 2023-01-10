const { MongoClient } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1/projects'

const client = new MongoClient(uri)

async function run() {

    try {
         client.connect()
        console.log("Conectado com sucesso ao mongoDB!!!")

    } catch (error) {
        console.log("Não conectado ):" + error)
    }
}

run()

module.exports = client

