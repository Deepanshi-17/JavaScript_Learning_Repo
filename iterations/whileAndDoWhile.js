/*
intialisation
While(condition check)
{
updation
}

do
{

}while(condition); 
do while loop will atleast execute once */

let myArray = ["superheroes", "Batman", "Spiderman", "Superman"]
let i = 0;

//WHILE LOOP
while(i < myArray.length)
{
    console.log(myArray[i])
    i++;
}

//DO WHILE LOOP
let score = 11
do
{
    console.log(`${score}`);
    score++;
}while(score <= 10); //Output-> 11