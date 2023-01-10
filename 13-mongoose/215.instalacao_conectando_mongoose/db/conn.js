const mongoose = require('mongoose')

async function main() {
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://localhost:27017/testemongoose2')
    console.log('conectou mongoDB com Mongoose')
}

main().catch((err) => console.log(err))

module.exports = mongoose