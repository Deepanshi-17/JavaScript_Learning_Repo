/*Two types of memory.
1. Stack
2. Heap

All the primitive data type is stored is stack and is always pass by value.
All the non-primitive/referential data type is stored in heap and is always passed by reference.*/

//Pass by value concept
let myName = "Deepanshi";
let anotherName = myName;
anotherName = "Lakshya";
console.log(myName);
console.log(anotherName);

//Pass by reference conecept
const superhero = ["Batman", "Superman", 'Doga'];
console.log(superhero);
const anotherArray = superhero;
anotherArray[0] = "Catman";
console.log(superhero);

let user =
{
    userName: "Deepanshi",
    userId: 123,
}
let user2 = user;
user2.userName = "Lakshya";
console.log(user2); //Output -> { userName: 'Lakshya', userId: 123 }
console.log(user); //Output -> { userName: 'Lakshya', userId: 123 }
