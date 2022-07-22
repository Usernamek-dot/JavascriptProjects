export  class Animal {
    // var de la clas
    public animalName: string;
    private age:number;
    protected zone : string;
//   metodo que inicializa las vars
  constructor(name: string , zone : string  , age ? : number | undefined ) {
      this.age = age;
      this.zone  = zone
    this.animalName = name;
  }

  //metodo
  move(distance: string | number ){
      console.log("Moviendo animal" + distance + "metros" );

  }


}

//instanciar clase por medio de un obj
const dog = new Animal( "tortuga" , "los andes");
//instanciar metodo
dog.move(23);
