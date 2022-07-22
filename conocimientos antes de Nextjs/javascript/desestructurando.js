const Persona = {
    nombre : "fulano",
    apellido : "aplFulano",
    comida : "comFulano",
}

const {nombre,apellido,comida } = Persona;

console.log(apellido,comida);


function Proccess ({nombre,comida}){
    console.log( nombre , comida);
}

Process(Persona);