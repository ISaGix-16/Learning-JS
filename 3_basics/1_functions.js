function sayMyName() {
    console.log("I");
    console.log("T");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
}

// sayMyName() 

// function addTwoNumbers (num1, num2) { // parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers (num1, num2) { 
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(9, 6) // arguments
// console.log("Result: ", result); 


function loginUserMessage(username = "user") { // if there in no argument given then function uses user ad input
    /* if(!username)
        console.log("Please enter a username");
        
    else */
    return `${username} just logged in`
}

// console.log(loginUserMessage("Isagi"));
// console.log(loginUserMessage("Isagi")); // undefined just logged in

// ... -> rest operator here
// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500));  // will return a array with all values

function calculateCartPrice( val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // first two values are used by val1 and val2 and returns remainig values ([500, 2000])

const user = {
    username: "Isagi",
    price: 299
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`)
}

// handleObject(user)
// handleObject({
//     username: "Itachi",
//     price: 599
// })

const array = [200, 300, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(array));
console.log(returnSecondValue([200, 300, 400, 600]));
