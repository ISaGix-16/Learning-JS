let myDate = new Date() // typeof == obeject

/* console.log(myDate.toString());
console.log(myDate.toDateString()); // only date with day
console.log(myDate.toISOString()); // somewhat similar to original output
console.log(myDate.toJSON()); // dimilar output as ISOString
console.log(myDate.toLocaleDateString()); // DD/MM/YYYY order
console.log(myDate.toLocaleTimeString()); // 12 hrs time with am and pm
console.log(myDate.toLocaleString()); // date and time both in Local formate */

// const myCreatedDate = new Date(2026, 0, 23) // year, month(starts from 0) and date
// const myCreatedDate = new Date(2026, 0, 23, 5, 3) // year, month(starts from 0) and date , hour , min 
const myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() 
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
    
})