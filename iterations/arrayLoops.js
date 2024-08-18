/* Array specific loops -> for of loop
SYNTAX ->
for(const element of object)
{

}*/
const array = [1,2,3,4,5]
for (const i of array) {
    console.log(i)
}
//For of loop also works on strings
const s = "Hello World"
for(const i of s)
console.log(i) //each character will be printed
/*
Output->
H
e
l
l
o
 
W
o
r
l
d
*/

//MAPS in Js like arrays only
const newMap = new Map() //Map stores key value pair and remembers the order in which the key-value pair is inserted. No duplicate values present in map, all are unique values only.
newMap.set('IN', "India")
newMap.set('USA', "United States of America")
newMap.set('Fr', "France")
newMap.set('Fr', "France")

console.log(newMap)
/* Duplicate value of france is truncated
OUTPUT-> 
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
  
NOW HOW TO LOOP THROUGH THE MAPS

for(const key of newMap)
{
  console.log(key)
} but instead of getting key we are getting both key and value pair in an array
 
DESTRUCTURING OF MAPS
for (const [key,value] of newMap)
{
   console.log(key " :-> " value)
}*/

for(const key of newMap)
    {
      console.log(key)
    }
/*
Output-> 
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
 */

for (const [key,value] of newMap)
    {
       console.log(`${key}  :->  ${value}`)
    }
/*
Output->
IN  :->  India
USA  :->  United States of America
Fr  :->  France 
*/

/*Does for_of Loop works in the case of objects. NO objects are not iterable by for of loop*/
const obj = {
    "game1" : "Temple run",
    "game2" : "Subway surf",
    "game3" : "Cnady Crush",
    "game4" : "Hill climb racing"
}

for(const [key, value] of obj)
{
    console.log(`${key} -> ${value}`)
} //TypeError: obj is not iterable

