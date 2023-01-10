const x = 10

//checar se x é um numero

if(!Number.isInteger(x)){
    throw new Error("o valor de x não é numero inteiro")
}

console.log('continuando codigo...')