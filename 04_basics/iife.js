/*
Immediately Invoked function expressions (IIFE)
1. Immediately executing the function
2. Function should not be polluted by the global scope by making standalone scope
3. When you want immediate connection to the DB must be established

Immediate execution of function can be done by the following method

function db(){ 
console.log("DB Connected")
}
db()

but how can you prevent the pollution from the global scope? then we use IIFE

SYNTAX FOR IIFE -> ()();
(function db() => {
    console.log("DB Connected")}
)();*/

(function db() {
    console.log("DB Connected")
})(); // Do add semicolon , Output-> DB Connected

(() => {
    console.log("DB Connected TWO")
})(); //Output-> DB Connected Two

//second iife function is not getting executed and is throwing some error, because iife knows when to execute but whne to stop it doesn't knows and hence, ';' is a must after IIFE declaration

//Passing paramters in IIFE ?
((sex) => {
    console.log(`${sex} should rule the society`)
})('Female'); //Output-> Female should rule the society