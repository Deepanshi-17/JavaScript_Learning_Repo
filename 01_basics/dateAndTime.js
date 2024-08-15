//data and time since the midnight of 1st january 1970

let myDate = new Date();
console.log(myDate) //Output-> 2024-08-15T02:28:28.485Z

//OTHER METHODS
console.log(myDate.toString()) //Output -> Thu Aug 15 2024 02:29:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Thu Aug 15 2024
console.log(myDate.toLocaleDateString()) //8/15/2024
console.log(myDate.toISOString()) //2024-08-15T02:30:59.865Z
console.log(myDate.toLocaleTimeString()) //2:30:59 AM
console.log(myDate.toJSON()) //2024-08-15T02:32:08.186Z

//Checking the data type of object
console.log(typeof myDate) //object

//Other ways of declaring date 
let declaredDate = new Date(2023, 0, 23, 5, 3);
//new date(year, month(zero-indexed), date, hour, minute)
console.log(declaredDate.toLocaleString()); //1/23/2023, 5:03:00 AM

declaredDate = new Date("2023-01-23"); //this is YY-MM-DD format (no 0 indexing of the month)
//the format mm-dd-yy is more preferred.
console.log(declaredDate.toLocaleString()); //1/23/2023, 12:00:00 AM

//TIMESTAMP ARE ALSO PRESENT IN DATE

let timeStamp = Date.now()
console.log(timeStamp) //1723689647505

//comparing of two dates using timestamp which measure the time elapsed from 1 january (midnight) 1970 till that date in millisecond
let anotherDate = new Date('2024-08-15');
console.log(anotherDate.getTime()); //1723680000000

//INTERVIEW QUESTION-> GET THE TIME IN SECOND RATHER THAN MILLISECOND
anotherDate = Date.now() //but you will get digits after decimal place so be careful of that
console.log(Math.round(anotherDate/1000)); //1723689911

//SOME OTHER METHODS

anotherDate = new Date()
console.log(anotherDate.getMonth() + 1) // + 1 because month is zero indexed
console.log(anotherDate.getDate()) //15

//printing date in your format using string interpolation

console.log(`${anotherDate.getDate()}/${anotherDate.getMonth() + 1}/${anotherDate.getFullYear()}`)

//VERY INTERESTING METHOD toLocaleString() and you define object in its argument

let dateNew = new Date();
dateNew.toLocaleString('default',
    {
        weekday: "long"
    }
)
console.log(dateNew);