// let myName = "Isagi      "

// console.log(myName.length); // will return 11

// so I want a myName.trueLength prototype that will return 5

let myHeros = ["Spidey", "Thor", "Hulk"]

let heroPower = {
    Thor: "Hammer",
    spidey: "Web",
    Hulk: "Gama",

    getSpideyPower: function(){
        console.log(`Spidey power is ${this.spidey}`);
    }
}  

// heroPower.prototye.xyz // -> for injecting new prototype

Object.prototype.isagi = function(){
    console.log(`isagi is present in all objects.`)
}

Array.prototype.itachi = function(){
    console.log(`This is Itachi Uchiha.`)
}

// heroPower.isagi() // -> this works

// myHeros.isagi()  // -> also works with this
// myHeros.itachi() // This works 
// heroPower.itachi() // this will not work 

// => Isagi works because it was given to object and all strings, arrays and function are objects in the end that's why it's working for all of them. But itachi is not working for all of them coz it was only given to array.


// ((((((((((((((((((((((((-> Inheritance <-))))))))))))))))))))))))

const user = {
    username: "Isagi",
    email: "isagi@example.com"
}

const teacher = {
    makeVideo: true
}

const teachinSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Assignment",
    fullTime: true,
    __proto__: teachinSupport
}

teacher.__proto__ = user   // old syntax

// modern syntax ->

Object.setPrototypeOf( teachinSupport, teacher)


let newUser = "Itachi        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

// newUser.trueLength()
"Shoyo       ".trueLength()
"Asta        ".trueLength()
