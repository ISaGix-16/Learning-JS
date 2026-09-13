// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// console.log(descriptor);

const user = {
    name: "Isagi",
    age: 19,
    isProPlayer: true,
    willGoal: function(){
        console.log(`Nahi karega`);
    }
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

for (const [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
} // now this will not work on name key due to enumerable is false 