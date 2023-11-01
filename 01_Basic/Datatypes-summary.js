//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myObj);


// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heal (Non-Primitive)
// Stack: Local variables, Function parameters, Return values.
// Heap: Objects, Arrays, Strings, Numbers, Booleans.



let myYoutubeName = "Ocean48"

let anotherName = myYoutubeName
anotherName = "Coffee With AI"

// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    userEmail: "user@google.com",
    upi: "rtgfed@upi",
}

let userTwo = userOne

userTwoEmail: "Rohit@google.com"


console.log(userOne.userEmail);
console.log(userTwo.userEmail);
