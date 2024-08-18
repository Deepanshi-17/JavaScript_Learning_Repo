const obj = {
    "game1" : "Temple run",
    "game2" : "Subway surf",
    "game3" : "Candy Crush",
    "game4" : "Hill climb racing"
}
/* for iterating objects we go for for-in loop. It's not that for-in loop is only useful in case of objects, we will look at other scenarios as well.*/
for (const key1 in obj) {
    console.log(`${key1} :-> ${obj[key1]}`)
}
/*
Output-> 
game1 :-> Temple run
game2 :-> Subway surf
game3 :-> Cnady Crush
game4 :-> Hill climb racing */

/*WILL FOR-IN LOOP WORK FOR ARRAYS AS WELL

here in for in loop syntax iterates over key, i.e for array it is indexes, rather than values, so you need to access array values accordingly*/
const array = ["hello", 2, 3, 4, 5]
for(const element in array)
{
    console.log(array[element]) //console.log(element) will only give you indexes, rather than array elements
}
/*Output->
hello
2
3
4
5*/

/*Will for-in loop works on maps as well? */
const newMap = new Map() //Map stores key value pair and remembers the order in which the key-value pair is inserted. No duplicate values present in map, all are unique values only.
newMap.set('IN', "India")
newMap.set('USA', "United States of America")
newMap.set('Fr', "France")
newMap.set('Fr', "France")

for(const key in newMap)
{
    console.log(`${key}`)
}//NO OUTPUT OBTAINED, because map is not iterable in this format. Later on, we will go on in more depth of maps