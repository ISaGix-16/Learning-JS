const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //  DB calls , cryptography, network

    setTimeout(function(){
        // console.log("Async task is complete.");
        resolve() // used for connecting with then
    },1000)
}) 

// then -> connection with resolve

promiseOne.then(function(){
    // console.log("Promise Consumed.");
})

// Short way of writing

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task 2.");
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log("Async 2 resolved.");
// })

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "Isagi Yoichi",
            email: "isagi@example.com"
        })
    }, 1000);
})

promiseThree.then((user) => {
    // console.log(user);
})


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error) {
//             resolve({
//                 username: "Itachi",
//                 email: "itachi@example.com",
//                 password: "123abc"
//             })
//         } else {
//             reject('ERROR: something went wrong')
//         }
//     }, 1000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or re"))

/*
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({
                username: "Itachi",
                email: "itachi@example.com",
                password: "123abc"
            })
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()  */

// https://jsonplaceholder.typicode.com/users

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // response.json take time so we have to use await
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/ISaGix-16')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))