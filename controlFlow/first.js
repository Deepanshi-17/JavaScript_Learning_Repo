/*if statement
if(condition is true then enter this scope)
{
//lines of code to be executed when condition is true
} 

conditional operators -> <, >, <= (less than or equal to), >= (greater than or equal to), == (check whether data is equal), === (check whether data is equal along with datatype being equal), != (not equal to) , !== (not equal and datatype also not equal

2 == '2' -> true
2 === '2' -> false
2 != '2 -> false
2 !== '2' -> true

*/
const isUserLoggedIn = true;
if(isUserLoggedIn)
{
    console.log(`User is logged in`)
}//output-> User is logged in


/*If and else statement, either if will run or else will run */

const temp = 40;
if(temp >= 40)
{
    console.log("Temperature greater than or equal to 40")
}
else
{
    console.log("Temperature less than 40")
}
//Output-> Temperature greater than or equal to 40

const score = 200;
if(score >= 200)
{
    const power = "fly"
    console.log(`user power: ${power}`)
}//but power has no meaning outside the scope of if statement. because power has const and let keyword, but if you would have used var keyword, then it doesn't has block scope.

//Without parathesis-> implicit scope
const bal = 10
if(bal < 20) console.log("Hello Beautiful");
/*Semi colon is must in implicit declaration.
but if you want to execute multiple lines of code in implicit scope then you can add comma between
the lines of the code but it is NOT AT ALL GOOD PRACTICE 
const bal = 10
if(bal < 20) console.log("Hello Beautiful"), console.log("Hello Bhadwa");
*/

/*NESTING -> IF, ELSE IF, IF */
const num = 500;
if(num < 500)
{
    console.log(`less than 500`)
}
else if(num < 750)
{
    console.log(`less than 750 but greater than or equal 500`)
}
else if(num < 900)
{
    console.log(`less than 900 but greater than or equal to 750`)
}
else
{
    console.log(`greater than or equal to 900`)
} //OUTPUT-> less than 750 but greater than or equal 500

//CHECKING MULTIPLE CONDITION
const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard) //both condition will be checked, if first is false then second is not checked
{
    console.log(`allow to buy multiple courses`)
}

if(!userLoggedIn || debitCard) //if any condition is true then code within the scope is executed. I first cond is true then second cond is not checked
{
    console.log(`something`)
}

//Later in this course we will read about conditional rendering, if user is logged in and it has token that we have given it from the server then show logout button instead of login button

