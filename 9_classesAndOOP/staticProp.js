class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

// static -> stop for accessing that property

const isagi = new User("Isagi")
// console.log(isagi.createId()) // will give error due to static

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const ego  = new Teacher("Ego", "ego@b luelock.com")
console.log(ego.createId()) // this will also give an error 