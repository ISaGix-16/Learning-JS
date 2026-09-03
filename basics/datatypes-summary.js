/* // Primitive 

// 7 types : String, Number, Boolean, null, Undefined, Symbol, bigint

// JavaScript is a dynamically typed language.

// Symbol
const id = Symbol('09')
const secondId = Symbol('09')

console.log(id === secondId);

const bigNumber = 948904803604936409633454n // bigint

// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["IronMan", "Spider Man"] // array

let myObl = {
    name: "Isagi",
    age: 19,
}           // Object

const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); */

// *******************************************************8

// Stack Memory (primitive) and heap (Non - Primitive)

let myYoutubeName = "BiLLu-BaDMoSs"

let anotheName = myYoutubeName
anotheName = "Isagi Yoichi"

/* console.log(anotheName);
console.log(myYoutubeName); */ 

let userOne = {
    email: "user@google.com",
    upi: "user@ybl", 
}

let usertwo = userOne

usertwo.email = "billu@google.com" // value will change in both

console.log(userOne.email);
console.log(usertwo.email);