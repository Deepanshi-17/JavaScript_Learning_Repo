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
*./