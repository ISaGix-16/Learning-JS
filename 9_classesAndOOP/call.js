function setUserName(username) {
    this.username = username
    // return username
}

function createUser(username, email, password) {
    // this.username = setUserName(username)
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("Isagi", "isgai@bluelock.com", "xyz16")
console.log(user);