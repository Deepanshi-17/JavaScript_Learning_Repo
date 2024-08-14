//strings can be declared in single as well as double quote both
const name = "Deepanshi";
const repoCount = 50;
console.log(name + repoCount + " value"); //output -> Deepanshi50value 
//the above method of concatenating string is deprecated.
//Backticks method is used as of now. Also termed as string interpolation.
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); //for declaring any variable use ${var_name} this syntax

//DECLARATION OF STRING 
const gameName = new String('hitesh'); //in this method you will get lot of property including length in the form of key value pair.
//You will get lot of methods and mastering string is all about mastering these methods.

console.log(gameName.length); // output -> 6
console.log(gameName[0]); // output-> h
console.log(gameName.__proto__); //output -> {}
console.log(gameName.toUpperCase()); //output -> HITESH
console.log(gameName); //original value not converted to upper case as we have passed by value and the data is stored in stack
console.log(gameName.charAt(1)); //output -> 'i'
console.log(gameName.indexOf('t')); //output ->2

//LEARN ALL METHODS FROM DOCUMENTATION

//SUBSTRING
let newString = gameName.substring(0,4); //slicing the string, you provide(start index, range);
//substring(start_index, range);
console.log(newString); //output-> hite

//SLICE
let stringNew = gameName.slice(-3,6); //can provide negative values also. Then substring will start from reverse.
console.log(stringNew); //outut -> esh
/*slice(start_index, end_index)
start_Index is optional and by default it is 0.
end_index is opetional and by default it is last element
Both can accept positive and negative value*/

//TRIM
const stringFromForm = "    Deepanshi    i";
console.log(stringFromForm);
console.log(stringFromForm.trim()); //Output-> Deepanshi
console.log(stringFromForm.trimStart()); //Output -> "Deepanshi   i"
//trim removes whitespaces

//REPLACE
const url = "https://hitesh.com/hitesh%20choudhary";
//url doesn't understand whitespaces it simply encodes the whitespace and adds %20
console.log(url.replace('%20', '-')); //output -> https://hitesh.com/hitesh-choudhary
//replace '%20' with '-'

//INCLUDES (Checks whether a certain keyword is included in a string or not)
console.log(url.includes('sundar')); //false
console.log(url.includes('hitesh')); //true

//SPLIT (Converting string to array)
const address = "327-Kailashpuri-Mughalsarai-Chandauli-UttarPradesh";
//const splitAddress = address.split('-', 1); //[ '327', 'Kailashpuri', 'Mughalsarai', 'Chandauli', 'UttarPradesh' ]
const splitAddress = address.split('-', 1); //[ '327' ]
console.log(splitAddress);

//Split(seperator, limit); Limit is optional and if you don't provide the limit it will ultimately take up the entire array.