"use strict"; //strictly use newer version of js. New standards were introduced in js, but developers didn't want that older code to go in vain and hence, to use newer standard "use strict" is written.
//alert("hello"); // this will only work in browser and we are using Node.js

//Readability of code must be high.
//Refer MDN web docs by mozilla org or ecma script original documentation for reference.

// Primitive DATA TYPE
let name = "Deepanshi"; //string data type (You can use either single quote or double quote, your preference)
let age = 18; // age data type
let isLoggedIn = false; //boolean data type (0/1)
let marks = null;//null (empty variable) is a standalone value in JavaScript. It is having object data type;
let spouse = undefined;//undefinded is also a dataype (no value is assigned to a variable)
//symbol (uniqueness of any variable)

//Object
let dataTypes = {
    name: typeof(name), //typeof gives datatype of object
    age: typeof(age),
    isLoggedIn: typeof(isLoggedIn),
    marks: typeof(marks), //object
    spouse: typeof(spouse) //undefined
  };
  
console.table(dataTypes);
