let result = function(score){
    return new Promise(function(resolve, reject){
        console.log("CAlculation    ");
        if(score > 50){
            resolve("YOu go it!")
        }else{
            reject ("error")
        }
    })
}

let grade = function(response) {
    return new Promise((resolve, reject) =>{
        console.log("you response is" + response)
       
    })
}


// llamar funciones

result(70).then(response=>{
    console.log("results recieved")
    // returna una promesa
    return grade(response)
})