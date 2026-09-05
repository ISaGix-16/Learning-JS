var c = 300

let a = 300 // totally independet from if/else 
if(true) {
    let a = 10
    const b = 20 // both are bolcked scope
    // var c = 30 // global scope
}

// let and const works only in block (ie. if/else, function etc) but when we use var it works in whole code 
// console.log(a); // give error 
// console.log(b); // give error
// console.log(c); // will print 30


function one() {
    const username = "Isagi"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // will give error

    two()
}

// one()

