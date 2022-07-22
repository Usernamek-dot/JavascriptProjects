function Proccess(...item){
    console.log(...item);
}

Proccess(1,2,3,4,5);


function Rest(...values){
    values.forEach(v =>{
        console.log(v);
    });
}

Rest(4,32,3,2);