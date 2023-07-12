let fs = require("fs")

let data = 'Hey Brother and sister whats up'

fs.writeFile("./contents.txt",data, (err)=> {
    if(err){
        console.log(err)
    } else console.log('The data has been successfully written to the file')
})