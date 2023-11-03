const name = "Rohit"
const repoCount = 20

// console.log(`Hello my Name is ${name}, and my Repo Count is ${repoCount}`);

const gameName = new String('Super-sonic-hitesh')

// console.log(gameName[1]);
// console.log(gameName.__proto__);


// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'));
// console.log(gameName.trimEnd())

const newString = gameName.substring(0,4)

// console.log(newString);

const anotherString = gameName.slice(-8,4)

// console.log(anotherString)


const newStringOne = "   Rohit   "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://boreing.com/elonmusk%20rtyuio"

// console.log(url.replace('%20', '-'));

// console.log(gameName.split('-'));


const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"


