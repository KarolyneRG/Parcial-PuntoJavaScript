
let myArray = Array.from({length:5}, () => Math.floor (Math.random()*100)+1)

const maxNumber = Math.max(...myArray);

console.log(myArray);
console.log(maxNumber);