const mongoose = require('mongoose')

async function main() {
     mongoose.set('strictQuery', true)
     mongoose.connect('mongodb://127.0.0.1:27017/getapet')
    console.log('conectou ao mongoose')
}

main().catch((err) => console.log(err))

module.exports = mongoose