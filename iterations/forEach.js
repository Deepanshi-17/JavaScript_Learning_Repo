/*HIGH ORDER FUNCTIONS
for each loop
SYNTAX
array_name.forEach( (element) => {
    } //Callback function)
CALLBACK FUNCTION HAS NO NAME HENCE USE ARROW FUNCTION OR 
ANOTHER SYNTAX
array_name.forEach( function (element) {
    }*/

const coding = ["CPP", "Python", "JavaScript", "Ruby"]
//ARROW FUNCTION
coding.forEach((element)=>
{
    console.log(element)
})
/*
Output->
CPP
Python
JavaScript
Ruby
*/
coding.forEach(function (element)
{
    console.log(element)
})
/*
Output->
CPP
Python
JavaScript
Ruby
*/

/*CAN YOU ALSO DECLARE A FUNCTION OUTSIDE AND USE IT IN FOR EACH LOOP?? EXAMPLE -> */
const arr = ["Deep", "Sanjeev", "Akanksha", "Komal"]
function printMe(item){
    console.log(item)
}

arr.forEach(printMe) //pass only the reference of the function not call it
/*
Output->
Deep
Sanjeev
Akanksha
Komal */

coding.forEach((item, index, arr) =>
{
    console.log(item, index, arr)
})
/*
Output->
CPP 0 [ 'CPP', 'Python', 'JavaScript', 'Ruby' ]
Python 1 [ 'CPP', 'Python', 'JavaScript', 'Ruby' ]
JavaScript 2 [ 'CPP', 'Python', 'JavaScript', 'Ruby' ]
Ruby 3 [ 'CPP', 'Python', 'JavaScript', 'Ruby' ] */

//Array of objects
const myCoding = [
    {
        languageName: "C++",
        languageFileName: "CPP"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "C",
        languageFileName: ".c"
    }
]
myCoding.forEach((item) =>
{
    console.log(`${item.languageFileName} ${item.languageName}`)
})
/*
Output->
CPP C++
py Python
js javaScript
.c C
*/

/*Does for each loop high order function return any value. Let's check out 
const values = (
(item) => {
    console.log(item)
    }
)
    console.log(values)
    
    Output-> undefined*/
const values = (coding.forEach((item) => {console.log(item); return item}))
console.log(values)
/*Output->
CPP
Python
JavaScript
Ruby
undefined */


//FILTER
const myNums = [1, 2, 3, 4, 5, 6, 7]
const modi = myNums.filter((nums) => {return nums > 4})
//ANOTHER METHOD-> const modi = myNums.filter((nums) => nums > 4)
console.log(modi)
//Output-> [ 5, 6, 7 ]

/*How can be achieve the same using for each loop rather than filter */
const newNums = []
myNums.forEach((item) =>
{
    if(item < 4)
    {
        newNums.push(item)
    }
})
console.log(newNums) //Output - [ 1, 2, 3 ]

//MAP; ADD +10 TO EACH VALUE IN THE ARRAY
const arr_ = [1,2,3,4,5];
const anotherArr_ = arr_.map((num)=> {return num + 10})
console.log(anotherArr_) //Output-> [ 11, 12, 13, 14, 15 ]

//Using forEach
const another_ = []
arr_.forEach((item) => {
    another_.push(item + 10)
})
console.log(another_) //Output-> [ 11, 12, 13, 14, 15 ]

/*
CHAINING METHOD. 
The result of first operation is passed as an argument for the other operation*/
const newNum = arr_.map((num) => num * 10).map((nums) => nums + 1).filter((nums) => nums >= 40)
console.log(newNum); //Output-> [ 41, 51 ]

/*REDUCE*/

const array_ = [1,2,3,4,5,6]
const intialValue = 0
const sumWithInitial = array_.reduce((accumulator, currentValue) => {return accumulator + currentValue}, intialValue);
console.log(sumWithInitial) //21 -> Sum of the array

//REDUCE WORKS FOR THE SHOPPING CART
