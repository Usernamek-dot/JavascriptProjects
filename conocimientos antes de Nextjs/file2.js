    //getter para llamar la edad
    function getAge(person) {
        return person.age;
    }
    // funcion donde se usan interfaces como plantillas
    function FormtaOBjs(person) {
        return { id: person.id, lastName: person.lastName };
    }
    // crear obj
    var personOne = {
        id: 1,
        firstName: "pepe",
        lastName: "pepeApl",
        age: 13
    };
    //ejecutar funcion
    console.log(FormtaOBjs(personOne));
    console.log(getAge(personOne));
