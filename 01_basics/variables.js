//Ways to declare a constant
const accountID = 1233;

//Ways to declare a variable (Var is deprecated as it doesn't know about block scope and functional scope)
let accountHolderName = "Deepanshi";
var cityName = "Delhi";
bankName = "HDFC"; // this is also possible in js so be careful
let accountState; // In js if you don't assign any value to any variable then, it assigns undefined to it.

//accountID = 1; (this can't be done as the value of any constant cannot be modified)
accountHolderName = "Shailja";
cityName = "Varanasi";
bankName = "SBI";
console.log(accountHolderName); // let can be changed
console.log(cityName); //var can be changed
console.log(bankName); //can be changed

console.table([accountHolderName,cityName,bankName, accountState]); //prints all the variables in the tabular format

{
    var personName = "Deepu";
}
console.log(personName); // OUTPUT -> Deepu, var can be accessed outside the block, no block scope.

{
    let personName = "Deepu";
}
// console.log(personName); // let cannot be accessed outside the block, it has block scope.