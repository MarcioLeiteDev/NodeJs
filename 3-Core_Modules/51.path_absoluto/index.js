const path = require('path')

console.log(path.resolve('teste.txt'))

//formar um path

const milFolder = 'relatorios'
const fileName = 'marcio.txt'

const finalPath = path.join("/" , 'arquivos' , milFolder, fileName)

console.log(finalPath)