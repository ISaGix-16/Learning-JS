/* const score = 234
// console.log(score);

const balance = new Number (5932)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // giving '2' values after decimal 

const otherNumber = 69.6967

console.log(otherNumber.toPrecision(2)); // give values till x digits

const newNumber = 1000000
console.log(newNumber.toLocaleString('en-IN')); */


// ********************** MATH **********************

/* console.log(Math); 

console.log(Math.abs(-546)); // gives absolute value
console.log(Math.round(56.52)); // round of value

console.log(Math.ceil(4.2)); // 5
console.group(Math.floor(4.2)); // 4
console.log(Math.min(4,3,6,1,8));
console.log(Math.max(4,3,6,1,8)); */

// console.log(Math.random()); 
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * ((max - min) + 1)) + min));