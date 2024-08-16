//singleton object declaration
const tinderUser = new Object ()
tinderUser.id = 1232;
tinderUser.name = "Ranju";
tinderUser.email = "t-delnu@microsoft.com"
console.log(tinderUser);

/* { id: 1232, name: 'Ranju', email: 't-delnu@microsoft.com' }*/
//mutilple instance
const tinderUser_ = {
    userName: "Lakshya",
    age: 22
}
console.log(tinderUser_); //{ userName: 'Lakshya', age: 22 }

//Objects within object
const internDetail = {
    internId: 123,
    internPersonalData: {
        internFullName: {
            firstName: "Deepanshi",
            lastName: "Sharma"
        },
        internCollege: "NIT Agartala",
        internBatch: 2025,
        internAge: 22
    },
    internManager: "Yamini Gupta",
    internMentor: "Kaushlam LNU",
    internTeam: "Word Web Team",
    internProject: "AI Powered Document Reviewer"
}

console.log(internDetail.internPersonalData?.internFullName.firstName); //Deepanshi

//Combining two objects 
const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};
const object2 = {9: "i"};

const obj3 = {obj1, obj2}; //Object1 and 2 within object3
console.log(obj3);
/*
{
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '4': 'd', '5': 'e', '6': 'f' }
} */

const obj4 = Object.assign({}/*target object*/, obj1, obj2, object2);
//Object.assign({}(optional parameter, tells put obj1 and obj2 into this), first object, second object and more);
console.log(obj4);

//Spread operator
const finalObj = {...obj1,...obj2,...object2};
console.log(finalObj); 

/* OUTPUT -> {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '9': 'i'
  }*/

//WHEN VALUES COMES FROM DB THEN WE OBTAIN ARRAY OF OBJECTS
const users = [ 
{
    name: "Deepanshi",
    age: "22"
},
{
    name: "Lakshya",
    age: "21"
},
{
    name: "Shailja",
    age: "20"
}
]
console.log(users[1]["name"]); //Lakshya

//Obtaining all keys of any object in array format
//Obtaining all values of any object in array format
const keys = Object.keys(internDetail);
console.log(keys);

/* Keys Ouput->
[
  'internId',
  'internPersonalData',
  'internManager',
  'internMentor',
  'internTeam',
  'internProject'
]*/

const values = Object.values(internDetail);
console.log(values);

/*Values Output->
[
  123,
  {
    internFullName: { firstName: 'Deepanshi', lastName: 'Sharma' },
    internCollege: 'NIT Agartala',
    internBatch: 2025,
    internAge: 22
  },
  'Yamini Gupta',
  'Kaushlam LNU',
  'Word Web Team',
  'AI Powered Document Reviewer'
] */

const entry = Object.entries(internDetail); //return an array within an array, each key value pair becomes an array with key and value as element and then all the key value pair array is combined together.
console.log(entry);
/* Entry Output->
[
  [ 'internId', 123 ],
  [
    'internPersonalData',
    {
      internFullName: [Object],
      internCollege: 'NIT Agartala',
      internBatch: 2025,
      internAge: 22
    }
  ],
  [ 'internManager', 'Yamini Gupta' ],
  [ 'internMentor', 'Kaushlam LNU' ],
  [ 'internTeam', 'Word Web Team' ],
  [ 'internProject', 'AI Powered Document Reviewer' ]
] */

//In objects before using any property do check whether that property exist or not
console.log(internDetail.hasOwnProperty("internPersonalData")) //true