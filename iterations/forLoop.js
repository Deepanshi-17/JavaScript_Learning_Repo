const arr = [1, 2, 3, 5, 6] //Array
for(let i = 0; i < arr.length; i++) //for loop (intialization, condition check, updation) {scope}
{
    console.log(arr[i])
    if(i === 4) console.log(`remove negative thoughts from my brain`)
}

//NESTED FOR LOOP
//Printing Mulitplication table
for(let i = 1; i <= 10; i++) //Outer Loop
{ 
    console.log(`${i} Multiplication table`)
    for(let j = 1; j <= 10; j++) //Inner Loop
    {
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

const superhero = ["Batman", "Superman", "Spiderman"]
for(let i = 0; i <= superhero.length; i++)
{
    console.log(superhero[i])
}
/* 
Output->
Batman
Superman
Spiderman
undefined 

There is no out of bond exception in JavaScript, but you will get undefined*/

/*BREAK AND CONTINUE KEYWORD
Break means come out of the loop
whereas Continue means ignore that particular value and move to updation and check another value*/

for(let i = 0; i <=20; i++)
{
    if(i == 12) break; //when i == 12, come out of the loop
    if(i == 2) continue; //when i == 2, ignore that value
    console.log(`${i}`)
}