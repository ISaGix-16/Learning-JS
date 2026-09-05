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
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
