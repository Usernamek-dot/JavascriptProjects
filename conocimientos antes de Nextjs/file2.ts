//interfaz  para los parametros
interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age?: number | null;
}

//interfaz para el tipo de elementos que retorna la funcion
interface FormatReturnType {
  id: number;
  lastName: string;
}

//getter para llamar la edad
function getAge(person: Person): number {
  return person.age;
}

// funcion donde se usan interfaces como plantillas
function FormtaOBjs(person: Person): FormatReturnType {
  return { id: person.id, lastName: person.lastName };
}

// crear obj
const personOne: Person = {
  id: 1,
  firstName: "pepe",
  lastName: "pepeApl",
  age: 13,
};
//ejecutar funcion
console.log(FormtaOBjs(personOne));
console.log(getAge(personOne));
