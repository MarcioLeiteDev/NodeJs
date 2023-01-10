const fs = require('fs')

fs.unlink('arquivo.txt' , function(err){
    if(err){
        HTMLFormControlsCollection.log(err)
        return
    }

    console.log('arquivo removido')
})