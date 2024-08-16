//this keyword only works in the object not in the case of functions
const user = {
    userName: "Deepanshi",
    price: 999,

    welcomeMessage: function(){
        console.log(`Hello ${this.userName}`)
        console.log(this) //talks about current context
    }
}

//for refering to current context we use THIS keyword. In arrow function there is no keyword
user.welcomeMessage() //Hello Deepanshi
user.userName = "Lakshya";
user.welcomeMessage() /*
Hello Lakshya
Current context -> {
  userName: 'Lakshya',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/

console.log(this) 
/*
 {}, no current context but this happens only in node.js environment, but if you will do console.log(this) in browser then current context will not be empty. It will have global object windows because earlier the engine to run js code was hidden in the browser.
 */


function chai()
{
    let name = "Deepanshi"
    console.log(this) // we will not get an empty object because within the function this will store a lot of context including global.
}
chai()

//This keyword doesn't word within function it only works within objects.
function another()
{
    let name = "Deepanshi"
    console.log(this.name) //undefined. This keyword only works within objects not within functions
}
another()

const chai_ = function() {
    let name = "Deepanshi"
    console.log(this.name);
}
chai_() // again undefined\

//ARROW FUNCTION
const arr = () =>{
    let age = 12
    console.log(this.age)
}
arr() //undefined

//This keyword produces undefined value in arrow function, function stored in variable and normal function as well

//EXPLICIT ARROW FUNCTION EXAMPLE
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,3)) // OUTPUT-> 5

//IMPLICIT RETURN ARROW FUNCTION
const add_ = (num1, num2) => num1 + num2  // not using return keyword, if you use {} then you need to use return keyword but if you use () then you don't need to use return keyword
//here, num1 and num2 are parameters of the functions and num1 + num2 is returned
/*RETURNING AN OBJECT you need to wrap it into braces
const add_ = () => ({username: "Hitu"}) */

console.log(add_(3,4)) // Output-> 7

//Looping through the array
const arr_ = [1,2,3,4,5];
arr_.forEach((num1)=>{
    console.log(num1*num1)
})
/* Output->
1
4
9
16
25 */