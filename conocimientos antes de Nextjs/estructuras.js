"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    //   metodo que inicializa las vars
    function Animal(name) {
        this.animalName = name;
    }
    //metodo
    Animal.prototype.move = function (distance) {
        console.log("Moviendo animal" + distance + "metros");
    };
    return Animal;
}());
exports.Animal = Animal;
//instanciar clase por medio de un obj
var dog = new Animal("tortuga");
//instanciar metodo
dog.move(23);
