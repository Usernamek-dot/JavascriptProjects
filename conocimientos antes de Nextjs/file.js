// function helloWorld() {
//   const hello = "hello";
//   const world = "world";
//   return hello + world;
// }
function helloWorldTS(param, arr, anyValue, ob) {
    var hello = "hello";
    var world = "world";
    return hello + world;
}
//ejecutar funcion
helloWorldTS(1, [1, 2], undefined, { id: 1, name: "Juan" });
//para definir que arroja una funcion
function sumArrays(arrOne, arryTwo) {
    //suma 1
    var sumOne = arrOne.reduce(function (accum, value) { return accum + value; });
    //suma 2
    var sumTwo = arryTwo.reduce(function (accum, value) { return accum + value; });
    return sumOne + sumTwo;
}
//ejecutar funcion
sumArrays([2, 3, 4, 5], [1, 3, 6, 5]);
