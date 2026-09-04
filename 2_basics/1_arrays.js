// array 

/*  const myArr = [0, 1, 2, 3, 4, 5] // can use different type of elements in single array
const myHeros = ["Spidy", "Iron man", "Isagi", "Itachi", "Shoyo Hinata"]

const myArr2 = new Array(3, 5, 7, 9, 2)

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // insert at start of array
// myArr.shift() // remove from start

// console.log(myArr.includes(9)); // for finding
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// SLICE AND SPLICE

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // doesn't take element at 3 and doesn't change original array

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // took the elemen tat 3 and also change the original array

// console.log(myn2);
// console.log("C", myArr); */

// **************** Lecture - 2 ******************

const marvelHeros = ["thor", "Ironman", "Sppiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros) // return a new array
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]

// console.log(allNewHeros);

const anotherArray =  [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArray = anotherArray.flat(Infinity)

// console.log(realArray);

/* console.log(Array.isArray("Isagi")); // check that it is array or not
console.log(Array.from("Isagi")); // make a array with given string 
console.log(Array.from({name : "Isagi"})); // gives empty array */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // makes a array

