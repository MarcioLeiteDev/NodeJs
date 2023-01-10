const mongoose = require('mongoose')

async function main() {
    mongoose.set('strictQuery', true)
    mongoose.connect('mongodb://127.0.0.1:27017/testmongoose')
    console.log('conectou mongoDB com Mongoose')
}

main().catch((err) => console.log(err))

module.exports = mongoose