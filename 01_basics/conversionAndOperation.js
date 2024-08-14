// //mostly you will be getting values from form, where the data is mostly of string type and hence to process that information you will need to do necessary datatype conversion.

// let score = "33";
// //now you are aware that the score is a number but this is not always true. Suppose you are extracting the score variable somewhere from frontend then there is no gurantee that the score obtained is number it might be a string as well. 

// console.log(typeof score);
// console.log(typeof(score)); // output is number (number is in small. NOTE THAT)

// //You are sure that operation you need to do on the number only, not on string so you better convert it to number first from string then perform the operations.

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number

// //SCENARIO NUMBER - 2 (STRING)
// let score_ = "33abc";

// console.log(typeof score_);//string

// let valueInNumber_ = Number(score_);
// console.log(typeof valueInNumber_); //number
// //But this is wrong as how can "33abc" be converted to a number, it is a string, how can you convert it to number. 
// console.log(valueInNumber_); //NaN (not a number) has also a number datatype

// //SCENARIO - 3 (NULL)
// let temp = null;

// let tempInNumber = Number(temp);
// console.log(typeof tempInNumber);
// console.log(tempInNumber);

// //Null is converted to 0 in coversion, this is also wrong be careful.

// //SCENARIO - 4 (UNDEFINED)
// let temp_ = undefined;

// let tempInNumber_ = Number(temp_);
// console.log(typeof tempInNumber_);
// console.log(tempInNumber_);

// //undefined is converted to NaN in coversion, this is also wrong be careful.

// //SCENARIO - 5 //BOOLEAN
// let isLogged = 0;

// let inNumber = Number(isLogged);
// console.log(typeof inNumber);
// console.log(inNumber);

// //undefined is converted to NaN in coversion, this is also wrong be careful.

// /*
// "33" -> 33
// "33abc" -> NaN
// true -> 1
// false -> 0
// undefined -> NaN
// Null -> 0
// */

// //CONVERSION TO BOOLEAN
// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); //true;

// /*1-> true
// 0 -> false
// "" -> false
// "Deepu" -> true */

/***********************************OPEERATIONS******************************************************/

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2); //add
console.log(2-2); //sub
console.log(2*3); //mutiply
console.log(2**3); //power
console.log(2/3); //divide
console.log(2%3); //modulo

//SIMPLE Situations
let str1 = "Deepanshi";
let str2 = " Sharma";
let str3 = str1 + str2;
console.log(str3);

//Complex situations
console.log("1" + 2); //Output -> 12
console.log(1 + "2"); //Output -> 12
console.log("1" + 2 + 2); //Output -> 122
console.log(1 + 2 + "2"); //Output -> 32

//Read ecma script documentation, about type conversion

console.log(+true); //+ causes type conversion (+true -> 0)
console.log(+"") //+ causes type conversion ( +"" -> 0)

//don't write this type of code ever, it only and only creates confusion

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // assigning same value to all variables.
console.table([num1, num2, num3]);

//postIncrement and preIncrement
let gameCounter = 100;
console.log(++gameCounter);
console.log(gameCounter++);
console.log(gameCounter);