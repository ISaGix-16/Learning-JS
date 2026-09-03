const accountId = 249160
let accountEmail = "isagi@google.com"
var accountPassword = "987000"
accountcity = "Alwar" // this is also possible
let accountState; // undefined

// accountId = 2 // not allowed 
accountEmail = "itachi@google.com"
accountPassword = "798090"
accountcity = "Khairthal"

/*
Prefer not to use var cause it is function scoped and let is blockscoped
*/

//console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity]);