let score = "49" // if "49abs" it's typeof will give NaN

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "49" => 49
// "49abc" => NaN
// true => 1; false => 0 
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "xyz" => true

let someNumber = 99
let stringNumber = String(someNumber)
