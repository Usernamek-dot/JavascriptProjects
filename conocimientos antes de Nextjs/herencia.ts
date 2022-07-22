
import {Animal} from  "./estructuras";

class Bear extends Animal {
    //propiedades individuales
    food : string;
                // ?
    constructor(name: string , zone : string  , age ? : number | undefined , kind ? :string , food? :string ){
        //heradando propieadades de clase padre
        super(name, zone, age);
        this.food = food;
    }
    move(distance){
        console.log("Oso Moviendo");
        super.move(distance);
    }
}

//instanciar
let bearOne = new Bear("fulano","bahamas");
console.log(bearOne.move(9));