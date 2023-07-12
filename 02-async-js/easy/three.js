let fs = require("fs")

fs.readFile('./contents.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err)
        return 
    } else console.log(data)
})