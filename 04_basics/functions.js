/* function simply means that whatever lines of code you wrote you put it into a package so that it can reused as and when required.
function (keyword) function_name(){
function definition
}*/
function sayMyName(){
    console.log("H"),
    console.log("I"),
    console.log("T"),
    console.log("E"),
    console.log("S"),
    console.log("H")
}
sayMyName //function reference
sayMyName() // function called

//Function Definition
function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
    return number1 + number2;
}

//Function call
const result = addTwoNumbers(3,17); // 3 and 17 are arguments
console.log(result); // 20
const result2 = addTwoNumbers(2, "2");
console.log(result2); //22

//CONCEPT OF SCOPE WILL BE DISCUSSED IN UPCOMING CLASSES 

function loginUserMessage(userName = "sam"){
    if(userName === undefined /*!userName*/)
    {
        return "please enter a valid username"
    }
    return `${userName} just logged in`
}
const res = loginUserMessage("Lakshya");
console.log(res); //Lakshya just logged in
console.log(loginUserMessage()); 
//undefined just logged in and hence to prevent this use conditional check or you can pass a default value in the function parameter itself like userName = "Sam"
console.log(loginUserMessage()); //sam just logged in, as no argument is passed and hence default value is considered

//considering the case of SHOPPING CART, where you don't know that how many arguments you will be getting. Because user can add any number of products and u don't have much idea that how many products he/she will add, then how will you add those arguments and show the shopping cart sum?

//we use REST OPERATOR (WHICH IS SIMILAR AS SPREAD OPERATOR)
function calculateCartPrice(...num1){
    return num1;
} //returns an array of all the arguments
console.log(calculateCartPrice(200, 100, 1000)); //[ 200, 100, 1000 ]


//another example
function calculateCartPrice_(val1, val2, ...num1){
    return `val1- ${val1}, val2- ${val2}, num1 ${num1}]`;
} //returns an array of all the arguments
console.log(calculateCartPrice_(200, 100, 1000, 2000)); //val1- 200, val2- 100, num1 1000,2000]

const user = {
    name: "Deepanshi",
    price: 999
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(user); // Output-> username is Deepanshi and price is 999
handleObject({
    name : "Lakshya",
    price: 999
}) //username is Lakshya and price is 999

const newArray = [100,200,300];
function fun(newArray)
{
    return newArray[1];
}
console.log(fun(newArray)) // Output-> 200
console.log(fun([2, -16, 700])) // Output-> -16