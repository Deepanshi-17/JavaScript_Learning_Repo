/* 
BLOCK AND GLOBAL SCOPE
let and const has block scope wherease var doesn't has block scope which creates a problem
*/
if(true)
{
    let  a  = 10
    const b = 20 
    var c = 200 // c = 200 (also the same case)
}
console.table([a, b, c]);
//let and const can't be accessed outside the block scope.

/*
POINT TO REMEMBER (INTERVIEW QUESTION)
Global scope is different in windows/browser and different in node.js environment 
*/