// const userEmail = "Isagi@google.com"
// const userEmail = ""
// const userEmail = []

/* if (userEmail) {
    console.log("Got User email");
} else {
    console.log("Don't have use email");
} */

// <<<<<<<<<<<<<<<<<<<< Falsy values >>>>>>>>>>>>>>>>>>>>
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// <<<<<<<<<<<<<<<<<<<< Truthy values >>>>>>>>>>>>>>>>>>>>
// "0", 'false', " ", [], {}, , function(){} and also except falsy values

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0)  
//     console.log("Object is empty.");
    


// ******* Nullish Coalescing Operator (??) : null, undefined *********

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10  // checks variable is null or undefined
val1 = undefined ?? 15

// console.log(val1);

// ****** Terniary Operator *******

// condition ? true : false;

const icePrice = 100
icePrice >= 80 ? console.log("greater than 80") : console.log("more than 80");
