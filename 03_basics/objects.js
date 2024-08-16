/*You can declare objects in two ways. 
1. Like constructor (if you make object using constructor then you obtain singleton object)
-> object.create
2. Like Literals (multiple instances -> never singleton)
-> const obj = { name: "Deepanshi", sex: "female"} */

//OBJECT LITERALS declaration
const jsUser = {
    userName: "Deepanshi",
    "full name": "Deepanshi Sharma",
    age: 22,
    location: "Jaipur",
    gmail: "deepanshi.nita@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Wednesday", "Thursday"]
}

//accessing objets
console.log(jsUser.userName); //DEEPANSHI

/*BUT USING THE DOT OPERATOR TO ACCESS OBJECT IS NOT THE MOST APPROPRIATE METHOD YOU SHOULD USE BRACKETS TO ACCESS.
const obj = {
    "full name": "Deepanshi Sharma"
}
console.log(obj.full name) -> wrong 
console.log(obj["full name"]); -> correct 
console.log(obj[full name]);-> wrong
*/

console.log(jsUser["full name"]); // Output-> Deepanshi Sharma

//DECLARING SYMBOLS
const mySym = Symbol("key1")

/* How can you use a symbol as a key in any object declaration. 
const mySym = Symbol("Key1")
const obj = 
{
  name: "Deepanshi",
  mySym: "firstSymbol"
}
console.log(obj["mySym"]); -> firstSymbol
console.log(typeof obj["mySym"]); -> string

This is wrong as data type is not symbol and it is string. For making it symbol use sqaure brackets around symbol as key to reference it to the declared symbol.
*/

const User = {
    userName: "Deepanshi",
    [mySym]: "First Symbol", //mySym: "First Symbol", -> earlier used
    "full name": "Deepanshi Sharma",
    age: 22,
    location: "Jaipur",
    gmail: "deepanshi.nita@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Wednesday", "Thursday"]
}

// console.log(User.mySym); //First Symbol
// console.log(User["mySym"]); //First Symbol
// console.log(typeof User["mySym"]); // String

console.log(User[mySym]); //First Symbol
console.log(typeof mySym); //symbol

//Changing values of any object
User[mySym] = "myKey2";
User.gmail= "hello";
console.log(User);
/*
{
  userName: 'Deepanshi',
  'full name': 'Deepanshi Sharma',
  age: 22,
  location: 'Jaipur',
  gmail: 'hello', //changed
  isLoggedIn: false,
  lastLoggedInDays: [ 'Monday', 'Wednesday', 'Thursday' ],
  [Symbol(key1)]: 'myKey2' //changed
} */

//Freezing the object so that no changes can be propagated. You won't notice any error but changes won't be reflected
// Object.freeze(User);
User.gmail = "Lolu@google.com"
console.log(User); //change not reflected

//In JavaScript you can treat functions as variable, no discrimination. You can add function within object
User.greeting = function(){
    console.log("Hello dear user");
}
console.log(User); //Hello dear user
console.log(User.greeting()); //Hello dear user //actual function called
console.log(User.greeting); //[Function (anonymous)] (reference of function is called not actual function)

User.greetingTwo = function(){
    console.log(`Hello ${User["full name"]}`); //String Interpolation, you can use this to refer to current object. this["any_key"];
}
console.log(User.greetingTwo()); //Hello Deepanshi Sharma