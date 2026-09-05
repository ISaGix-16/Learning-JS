// singleton
// Object.create 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Isagi",
    "full name": "Isagi Yoichi", // can't access this with JsUser.full name (access with     JsUser["full name"])
    [mySym]: "myKey1", // syntax for assingning a symbol as key 
    age: 19,
    location : "Khairthal",
    email: "isagi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

/* console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); */


JsUser.email = "isagi16@google.com"
// Object.freeze(JsUser)
// JsUser.name = "Itachi"

// console.log(JsUser); 

JsUser.greeting = function() {
    console.log("Hello Js user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// *************** Singleton and Help with constructer ********************

// const tinderUser = new Object() // singleton object 

const tinderUser = {}     // -> non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Itachi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "itachi@google.com",
    fullname: {
        userfullname: {
            firstname: "Itachi",
            lastname: "Uchiha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} ->makes a new object with both object inside this 
// const obj3 = Object.assign({}, obj1, obj2) // assign(obj1, obj2) both are right but do it with adding a empty object first that's better

const obj3 = {...obj1, ...obj2} // best way

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "xyz@google.com"
    },
    {
        id: 1,
        email: "xyz@google.com"
    },
    {
        id: 1,
        email: "xyz@google.com"
    }
]

/* console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // array of kleys
console.log(Object.values(tinderUser)); // array of all valuer
console.log(Object.entries(tinderUser)); */ // array with arrays of key and value

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // for checking the property exists or not

