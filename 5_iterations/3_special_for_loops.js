// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

/* for (const num of arr) {
    console.log(num);
} // similar as for(int num : arr) in c++ */

const greetings = "hello world!"

for (const char of greetings) {
    // console.log(`Each  char is ${char}`);
}


// Maps -> stores unique and in order as inserted

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

/* const myObject = {
    game1: "BGMI",
    game2: "COD",
    game3: "Valorant",
    game4: "Minecraft",
    game5: "Roblox"
} */

// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value);
// } // object is not iterable by for-of

// ******************** for - in ***********************

const myObject = {
    game1: "BGMI",
    game2: "COD",
    game3: "Valorant",
    game4: "Minecraft",
    game5: "Roblox"
}

for (const key in myObject) {
    // console.log(key, ':-', myObject[key]);
}

const programming = ["js", "c++", "python", "react", "html"]

for (const key in programming) {
    // console.log(programming[key]);
} // this is similar to normal for loop

for (const key in map) {
    // console.log(key); 
} // map is no iterable in js


// **************** for - each ***************

const codding = ["js", "ruby", "java", "python", "cpp"]

// codding.forEach(element => {
//     console.log(element);
// });

// codding.forEach((val) {
//     console.log(val);
// })

// codding.forEach(printMe) // only give reference

// function printMe(item) {
//     console.log(item);
// }

// codding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCodding = [
    {
        laguageName: "JavaScript",
        fileName: '.js'
    },
    {
        laguageName: "Java",
        fileName: '.java'
    },
    {
        laguageName: "Python",
        fileName: '.py'
    },
    {
        laguageName: "C++",
        fileName: '.cpp'
    }
]


myCodding.forEach( (item) => {
    console.log(item.fileName);
})