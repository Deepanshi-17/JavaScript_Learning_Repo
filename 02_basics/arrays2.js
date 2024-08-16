const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash","batman"]

//PUSH (NOT JOINS, PUSHES ARRAY WITHIN ARRAY)
// marvel_heroes.push(dc); 
// console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// /*as array can take any type of element hence, this push operation pushes the array data type into the array.*/
// console.log(marvel_heroes[3][1]); //flash

//CONCAT OPERATION (joins two array)
// const newArray = marvel_heroes.concat(dc);
// console.log(newArray); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//MOST BEST method to join two or more arrays.
const anotherArray = [...marvel_heroes, ...dc];
console.log(anotherArray); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//FLAT METHOD (USED WHEN YOU HAVE ARRAYS WITHIN ARRAYS)
const arr_ = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
const newArr_ = arr_.flat(Infinity); 
//flat (the depth till which you want to flatten out the array)
console.log(newArr_); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

/*Sometimes you get values in the form of JSON object and many other formats. So, you need to check whether the obtained data is of array type and then if you want to convert it to array type then utilize certain methods*/
console.log(Array.isArray("Deepanshi")); //false
console.log(Array.from("Deepanshi")); // Converts input to array
/*
Output->[
  'D', 'e', 'e',
  'p', 'a', 'n',
  's', 'h', 'i'
] */

//VERY IMPORTANT FOR INTERVIEWS
console.log(Array.from({name: "Deepanshi"})) //Output-> []
/*Output is empty because we haven't specifies whether we have to make array from the key or value*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // returns an array by taking elements as input. Elements can be anything
//OUTPUT -> [100,200,300]