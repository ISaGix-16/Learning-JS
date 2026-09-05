const name = "Isagi"
const repoCount = 6

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}.`);

const gameName = new String('Call-Of-Duty')

// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
/* console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 5) 
console.log(newString); */


// const anotherString = gameName.slice(-12, 4)
// console.log(anotherString);

const spaceString = "     Isagi   "
console.log(spaceString);
console.log(spaceString.trim());

const url = "https://isagiyoichi.com/face%20color"

console.log(url.replace('%20','-')); // https://isagiyoichi.com/face-color
console.log(url.includes('isagi'));

console.log(gameName.split('-'));
