console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true

//MAKE SURE TO ALWAYS COMPARE DATA HAVING SAME DATA TYPES. TypeScript provides these inbuilt checks, but in JavaScript you need to be more meticuluous and cautious in such scenarios.
console.log("2" > 1);// true
console.log("02" > 1); //true

//Problematic comparison
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true;

//WHY??

/*greater than and less than operators work differently from equal to operator. The former converts the null to a number data type i.e. 0 and hence null >= 0 is true and null > 0 is false.
But equal to operator doesn't convert null to a number data type. Hence, null == 0 gives false.
IN JS COMPARISON OPERATOR (>, <) WORK DIFFERENTLY THAN EQUALITY OPERATOR */

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false;

//strict check ( === )
console.log("2" == 2); //true (converts the data type and then compares)
console.log("2" === 2); //false (doesn't converts data types, it compares both data type and value);