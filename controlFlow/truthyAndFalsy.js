const userEmail = "deepanshi.nita@gmail.com";
if(userEmail)
{
    console.log("got the mail")
}
else
{
    console.log("not email")
}

/*if userEmail is not null/undefined then it is truthy value, it is true, but if the string is empty then it is falsy value only. 
const x = "" -> falsy
const y = "hello" -> truthy
let z; -> falsy (undefined)

POINT TO REMEMBER 
const userEmail = [] -> this is truthy value, empty array is truthy value only.

FALSY VALUES
false, 0, -0, BigInt 0n, NaN, undefined, NULL, ""

TRUTHY VALUES
true, [], "0", "false", " ", {}, function(){}*/

const arr = []
if(arr.length === 0)
{
    console.log(`empty array`)
}
else console.log(`array not empty`) //empty array

const obj = {
    name: "deepu"
}
if((Object.keys(obj)).length === 0)
{
    console.log("empty object")
}
else console.log("not empty object")

/*
INTERVIEW QUESTIONS

false == 0 -> true
false == "" -> true
0 == "" -> true
*/

/*Nullish Coalescing Operator (??): null, undefined. 
If first value is null or undefined then assign the next value, that happens when you recieve data 
from DB, which can have inconsistent data, either null or undefined. Hence, to stop the code from 
failing we do it. */

let val1;
val1 = 100?? -1;
console.log(val1); //100

let val2;
val2 = null?? -1//-1
console.log(val2)

val2 = undefined?? -200//-200
console.log(val2)

val2 = undefined??null?? 10
console.log(val2) //10
//any value that will be encountered first will be assigned to the variable.

/*Ternary operator

let x = (2 === '2')? 10: 5
condition? true: false
*/
let x = (2 === '2')? 10:5;
console.log(x) //Output-> 5

const iceTea = 999
iceTea >= 999? console.log("greater than or equal to 999"): console.log("less than 999")
//Output-> greater than or equal to 999