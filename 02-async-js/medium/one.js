var fs = require("fs")

// input => hello     world    my    name   is       raman
function clean(data){
    let partData = data.split(' ')
    let fullData = []
    for(let i = 0; i < partData.length; i++){
        if(partData[i] === ''){

        } else {
            fullData.push(partData[i])
        }
    }

    let answer = fullData.join(' ')
    return answer
}

fs.readFile('./input.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err)
    } else {
       cleanedData = clean(data)
       fs.writeFile('./input.txt', cleanedData, (err)=>{
        if(err){
            console.log(err)            
        } else console.log('The data has been successfully written to the file')       
       })
        }
})
