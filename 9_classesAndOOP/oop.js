const user = {
    username: "Isagi",
    loginCount: 16,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`Username: ${this.username}`);
        // console.log(this)
    }
}

// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }
    
    return this // this is not required but it's good to write
}

/*
const userOne  = User("Itachi", 36, true)

const userTwo = User("Shoyo", 10, false)
console.log(userOne);
// console.log(userTwo);  */ // -> here userTwo will overwrite userOne so if we will try to print userOne then there will be values of userTwo so for this we use new Keyword(constructor function)


const userOne = new User("Itachi", 16, true)
const userTwo = new User("Shoyo", 10, false)

console.log(userOne);
console.log(userTwo);

// new ->
// 1. creates a empty object
// 2. constructor functions call due to new
// 3. injection of arguments
// 4. give all the arguments