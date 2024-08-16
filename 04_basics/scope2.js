/*concept of closure -> but you do need to know the concept of DOM 
closure overview -> parent functions can't access variable of child functions but vice-versa is true
Function within functions*/
function one()
{
    const userName = "Deepanshi";
    function two()
    {
        const website = "You tube";
        console.log(userName);
    }
    //console.log(website); // can't access this outside the block scope of function two
    two()
}
one()

//ICECREAM concept. Elder can't icecream from younger people but younger people can ask for icecream to elder people.

if(true)
{
    const userName = "Deepu"
    if(userName === "Deepu")
    {
        const website = " you tube"
        console.log(userName + website)
    }
    //console.log(website) // can't be accessed outside block scope
}
//console.log(userName)// can't be accessed outside block scope

//Interesting example/ CONCEPT

//First way of declaring function using function name
console.log(addOne(2)); //3
//The above line can be present even before function declaration and it won't cause any error.
//Only function declaration
function addOne(num1){
return num1 + 1
}

//Another way of declaring functions-> stroing function into variable. Variables are powerful in JavaScript
//Here function declaration + storing it into a varaible
const addTwo = function(num2)
{
    return num2 + 2;
}
console.log(addTwo(3)); //5 

//The above line need to present after the function declaration otherwise it will throw error

//CONCEPT OF HOISTING (HOW JS STORES VARIABLE USING TREE DATA STRUCTURE)
//NEXT ITERATION IS ALSO COMING...