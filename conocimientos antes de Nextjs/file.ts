// function helloWorld() {
//   const hello = "hello";
//   const world = "world";
//   return hello + world;
// }

function helloWorldTS(
  param: number,
  arr: Array<number>,
  anyValue: undefined,
  ob: object
) {
  const hello: string = "hello";
  const world: string = "world";
  return hello + world;
}

//ejecutar funcion
helloWorldTS(1, [1, 2], undefined, { id: 1, name: "Juan" });
//para definir que arroja una funcion
function sumArrays(arrOne: Array<number>, arryTwo: Array<number>): number {
  //suma 1
  const sumOne: number = arrOne.reduce(
    (accum: number, value: number) => accum + value
  );

  //suma 2
  const sumTwo: number = arryTwo.reduce(
    (accum: number, value: number) => accum + value
  );

  return sumOne + sumTwo;
}

//ejecutar funcion
sumArrays([2, 3, 4, 5], [1, 3, 6, 5]);


// parametro opcional con diferentes tipos de datos
const formtarOBjTwo = (id?: number | string | undefined): void | number => {
  console.log(10);
};

formtarOBjTwo();
