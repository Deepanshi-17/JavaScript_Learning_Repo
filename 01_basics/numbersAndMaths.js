const score = 400;
console.log(score); //Output-> 400

const anotherScore = new Number(400); //explicitly defining the data type as number and you will get some properties as prototypes.
console.log(anotherScore); //Output-> [Number: 400] 
console.log(anotherScore.__proto__); //Output-> {}

//Converting number to string datatype and accessing the properties of the string data type
console.log(anotherScore.toString().length); //Output-> 3
console.log(typeof anotherScore);

// (toFixed method)
const deci = 100.13829;
console.log(deci.toFixed(3)); //100.138

//Precision
let deci_ = 12.23;
console.log(deci_.toPrecision(3)); //Output-> 12.2

deci_ = 123.89;
console.log(deci_.toPrecision(3)); //Output-> 124

//SITUATION IN WHICH YOU NEED TO BE CAREFUL. IF YOU ARE USING 3 AS PRECISION MAKE SURE THAT THE 3 DIGITS WILL ONLY BE THERE BEFORE DECIMAL
deci_ = 1123.89;
console.log(deci_.toPrecision(3)); //Output-> 1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //Output -> 1,000,000
console.log(hundreds.toLocaleString('en-IN')); //Output -> 10,00,000

/*****************************************************MATHS*****************************************/

console.log(Math); //Object [Math] {}
console.log(Math.abs(-1)); //1
console.log(Math.round(123.89892)); // 124
console.log(Math.ceil(12.1)); //13
console.log(Math.floor(12.1)); //12
console.log(Math.sqrt(25)); //5
console.log(Math.pow(5,2)); //5

//Maximum and minimum value in an array
console.log(Math.min(4, 400, 1, -1)); //-1
console.log(Math.max(4, 400, 1, -1)); //400

//MATH.RANDOM()
console.log(Math.random()); // gives random value between 0 and 1.
//But we want random values between 1 - 10;
console.log(Math.floor(Math.random()*10) + 1);

//FORMULA FOR DEFINING THE RANGE
const max = 10;
const min = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));