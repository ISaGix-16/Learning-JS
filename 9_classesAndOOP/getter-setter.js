class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

// getter and setter comes together
    
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    
    get password() {
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const isagi = new User("isagi@bluelock.com", "ego16")
console.log(isagi.password);
console.log(isagi.email);