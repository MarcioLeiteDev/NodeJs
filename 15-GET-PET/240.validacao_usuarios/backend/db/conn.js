const mongoose = require('mongoose')

async function main(){
    mongoose.set('strictQuery', true)
     mongoose.connect('mongodb://localhost:27017/test')
    console.log('conectou ao mongoose')
}

main().catch((err) => console.log(err))

module.exports = mongoose