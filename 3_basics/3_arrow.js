const user = {
    username: "Isagi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this) // will return complete user object
    }
}

// user.welcomeMessage()
// user.username = "Itachi"
// user.welcomeMessage()

// console.log(this); // empty current context / empty object 

// function chai() {
//     let username = "Isagi"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Isagi"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Isagi"}) // for returning the object pranethesis is compulsary

console.log(addTwo(5, 6));
