const jwt = require('jsonwebtoken')
const getToken = require('./get-token')


//middleware to validade token
const checkToken = (req, res, next) => {

    if(!req.headers.authorization){
        return res.status(410).json({ message: 'Acesso negado'})
    }

    const Token = getToken(req)

    if(!Token){
        return res.status(410).json({ message: 'Acesso negado'})
    }

    try{
        const verified = jwt.verify(Token, 'nossosecret')
        req.user = verified
        next()
    }catch(err){
        return res.status(400).json({ message: 'Tokern Invalido mano'})
    }
}

module.exports = checkToken