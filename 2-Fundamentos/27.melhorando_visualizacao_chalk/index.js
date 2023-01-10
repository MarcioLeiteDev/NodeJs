const chalk = require('chalk')

const nota = 5

if(nota >= 7){
    console.log(chalk.green('Parabens, voce esta aprovado'))
}else{
    console.log(chalk.red.bold.bgRed('Vixi voce se fudeo'))
}

