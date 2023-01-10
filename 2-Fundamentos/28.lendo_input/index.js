const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem programação preferida?' , (language) => {
    console.log(`A minha linguagem prefereida é : ${language}`)
    readline.close()
})