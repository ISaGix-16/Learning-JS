/* // const codding = ["js", "ruby", "java", "python", "cpp"]

// const values = codding.forEach( (item) => {
//     console.log(item);
//     return item // doesn't return ant thing 
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter - makes a new array with the elements who satisfied the given condition

// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4)
//         newNums.push(num)
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const sameYearBooks = books.filter( (book) => {
    return book.edition > 2007 && book.genre === "Science"
})

// console.log(sameYearBooks);

// ************************************** MAP *************************************


const numsCondition = myNums.map( (num) => num + 4)

// console.log(numsCondition);

// map - makes a array with acoording to given condition with all the elements

const newNums = myNums.map( (num) => num * 10).map( (num) => num + 1)
                    .filter( (num) => num > 50)
                    .filter( (num) => num < 90) // chaining

console.log(newNums); */


// *********************************************************

// Reduce

const myNums = [1, 2, 3]

// const mySum = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) // 0 is initial value and accumulation for first iteration. if we will not give nay valut it will be 1.

const mySum = myNums.reduce( (acc, currval) => (acc + currval), 0)

// console.log(mySum);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 1099
    },
    {
        itemName: "PY Course",
        price: 999
    },
    {
        itemName: "C++ Course",
        price: 1499
    },
    {
        itemName: "Mobile Course",
        price: 7999
    },
    {
        itemName: "DSA Course",
        price: 10999
    }
]

const totalCost = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalCost);
