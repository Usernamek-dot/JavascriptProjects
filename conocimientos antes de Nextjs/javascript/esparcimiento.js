const arr = [3,4,5,6];
const arr2 = [...arr,67];

console.log(arr,arr2);


const item = {
    id:5,
    title:"TItulo",
}
const item2 = {...item};

item2.date = '1/2/2020';

console.log(item2);