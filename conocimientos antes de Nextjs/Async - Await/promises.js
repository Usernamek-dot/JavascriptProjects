function divede(a, b){
return new Promise(function(resolve,reject){
    if(b === 0){
        reject(new Error("You cannot divide by 0"));
        return
    }
    resolve(a/b);
})
}

divede(10,2).then(function(result){
    console.log(`Division Success: ${result}`);
}).catch(function(error){
    console.log("no :${error}")
})