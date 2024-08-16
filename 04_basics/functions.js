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