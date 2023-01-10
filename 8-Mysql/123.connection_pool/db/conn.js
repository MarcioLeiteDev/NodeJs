const mysql = require('mysql')

const poll = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

module.exports = poll