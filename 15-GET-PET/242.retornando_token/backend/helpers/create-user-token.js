const jwt = require('jsonwebtoken')
const User = require('../models/User')

const createUsertoken = async (user, req, res) => {
    //create token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    } , "nossosecret")

    //return token
    res.status(200).json({
        message: "voce esta autenticado",
        token: token,
        userId: user._id
    })
}

module.exports = createUsertoken