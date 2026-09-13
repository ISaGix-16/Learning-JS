class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}.`)
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)  // this is current replacement of call 
        this.email = email
        this.password = password
    }

    addCourse(course){
        console.log(`A new course ${course} was added by ${this.username}.`);
    }
}

const ego = new Teacher("Ego", "ego.@bluelocj.com", "worldCup")

// ego.addCourse("zeroToOne")

const isagi = new User("Isagi")
// isagi.addCourse() // this will not work
// isagi.logMe()
// ego.logMe()

console.log(ego instanceof Teacher); // true
console.log(ego instanceof User); // true

// instanceof checks that this class was used or not