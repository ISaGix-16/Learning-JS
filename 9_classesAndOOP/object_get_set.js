const User = {
    _email: 'xyz@example.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    },
    
    get password(){
        return this._password.toUpperCase()
    },

    set password(value) {
        this._password = value
    }
}

const isagi = Object.create(User)

console.log(isagi.password);
console.log(isagi.email);