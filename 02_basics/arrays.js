/*Arrays = Collection of elements stored in an individual variable
1. Arrays in JavaScript are resizable. Hence, new elements can be added as and when required
2. Elements can be of different datatype such as both number and string
3. Elements can be accessed directly by specifying the index
4. Zero-Based indexing
5. Arrays in Js make shallow copies i.e. properties share the same reference wherease deep copy stands for properties which doesn't share same reference point */

const superHeroes = ["Batman", "Superman", "Doga", "Nagraj"];
console.log(superHeroes) //[ 'Batman', 'Superman', 'Doga', 'Nagraj' ]

const superHeroes_ = new Array("Batman", "Superman", "Doga", "Nagraj")
console.log(superHeroes_) //[ 'Batman', 'Superman', 'Doga', 'Nagraj' ]

//array elements not neccessarily be similar
const anotherArray = [1,2,3,'Hello', '$'];
console.log(anotherArray); //[ 1, 2, 3, 'Hello', '$' ]

//Array methods

anotherArray.push(6); //[ 1, 2, 3, 'Hello', '$', 6 ]
console.log(anotherArray);

anotherArray.pop();
console.log(anotherArray); //pops the last element

anotherArray.unshift(0); //add the element 0 at the start of the array
//it basically shifts all the elements of the array to right which is not an optimised way to add the elements
console.log(anotherArray);

anotherArray.shift(); //deletes the element from the start of the array
console.log(anotherArray);

console.log(anotherArray.includes(9)) //false //checks whether a particular element is present in the array or not.

console.log(anotherArray.indexOf('Hello')); //3 //gives index of the element in the array.

const newArray = anotherArray.join(); //converts array elements to string seperated by comma
console.log(newArray); //1,2,3,Hello,$
console.log(typeof newArray); //string


//SPLICE AND SLICE CONCEPT
const arr_ = [1, 2, 3, 4, 5, 6, 7];
console.log(arr_.slice(1,-1)); //slice(start_index, end_endex) (end index is excluded not included)
//Output -> [ 2, 3, 4, 5, 6 ]
//indexes can be negative


//SPLICE MODIFIES THE ORIGINAL ARRAY AS WELL AND LITERALLY SPLICES/ DIVIDES THE ARRAY IN TWO PORTIONS.
const arr2 = [12, 14, 1, 0, -1];
console.log(arr2.splice(2,3)); //[ 1, 0, -1]
console.log(arr2); // [12, 14] (REMAINING ELEMENTS ARE PRESENT HERE)
//splice(start_index, count of elements to be deleted)