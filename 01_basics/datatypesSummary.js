/*All the datatypes in javaScript is categorized into two major domains.
Categorization is based on how data is stored in the memory and how is it accessed from the memory. 
1. Primitive data types
2. Non-Primitive data types /reference data type

7 primitive data type, it is always call by value, whenever you do any change in this variable you always change the copy not the actual data
1. string
2. Number
3. Boolean
4. Null
5. Undefined
6. symbol
7. BigInt

Non-Primitive/ Reference type data type
1. Arrays
2. Objects
3. Functions

Javacript is dynamically typed language.
const score = 100 (we didn't tell that we are going to store number data type in this. In c++ we use int a = 99)
in typeScript const score:number = 100; (we specify the datatype)
*/

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false. The use of symbol data type is to provide uniqueness.

const bigNumber = 1989399781365528201n //n is used to convert to bigint;
console.log(bigNumber);

//REFERENCE DATA TYPES/ NON-PRIMITIVE DATA TYPE

const heroes = ["Superman", "Batman", "nagraj", "Doga"]; //ARRAY
//OBJECT (assigning the object to studentData variable)
console.log(typeof heroes); //array comes under object data type

let studentData = {
    studentName: "Deepu",
    age: 22,
    companyName: "Microsoft",
    semester: 7
}
console.log(typeof studentData); //object data type
//variable function

const firstFun = function(){
//funtion defintion
console.log("Hello World");
}

//NULL HAS OBJECT DATA TYPE

console.log(typeof firstFun); //function is also a datatype
