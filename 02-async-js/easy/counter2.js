let counter = 0 

function timer(){
    counter += 1
    console.clear()
    console.log(counter)
    setTimeout(timer, 1000)

}

setTimeout(timer, 1000)