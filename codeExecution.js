/*Execution context and Call stack-> Use browser to execute js code

JAVASCRIPT EXECUTION CONTEXT

1. Global Execution context is made firstly, In node global execution context referred by THIS is empty {} whereas in browser global execution context contains window object
Javascript is single threaded, everything is process in javascript.

2. Functional execution context
3. Eval execution context (less important for interviews)

Javascript code is executed in two phases.
1. Memory creation phase/creation phase (memory allocation)
2. Execution phase

Understanding how the below js code would be executed.
let val1 = 10
let val2 = 5
function addNum(num1, num2)
{
  let total = num1 + num2
  return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

Steps of execution-

1. Global execution context -> stored in this 
2. Memory creation phase -> val1 - undefined, val2 - undefined, addNum - function definition entirely, result1 - undefined, result2 - undefined
3. Execution phase -> val1 = 10, val2 = 10, addNum -> function definition, result1 -> (another execution context of function addNum is created which contains new variable environment and execution thread)
again for function addNum memory creation phase and execution phase would occur.
3a) Memory phase 
num1 = undefined, num2 = undefined, total = undefined
3b) execution phase
num1 = 10, num2 = 5, total = 15
Now, this total value is returned to global execution context and execution context of addNum function is deleted.

back to execution phase (3) result1 = total = 15

next result2 = creation of execution context of addNum function. (Execution context consists of new variable environment and execution thread)
-> Memory creation phase -> num1 = undefined, num2 = undefined, total = undefined.
-> Execution phase -> num1 = 10, num2 = 2, total = 12
this total is returned to global execution context and execution context of this function is deleted.

result2 = total = 12;


/*****************************CALL STACK**********************************************************/
function fun(num1, num2)
{
    let result1 = num1 + num2
    function fun_(result1)
    {
        let x = result1* result1
        function fun__(x)
        {
            return x-1
        }
        return x - fun__(x);
    }
    return result1 + fun_(result1)
}
console.log(fun(1,2))

/*Call stack -> fun()-> fun_()-> fun__(), then fun()__ gets out, then fun_() gets out and then fun() gets out */
