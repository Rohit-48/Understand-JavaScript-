let score = true

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) 


// 1 => true , 0 => false
// "" => false
// "Rohit" => true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ********************************Operations**********************************************


let value = 3
let negValue = -value
// console.log(negValue)

let str1 =  "Hello"
let str2 = " Rohit"
// console.log(str1 + str2)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true)



let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// Postfix increment: The operand is incremented after the expression is evaluated.
let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

// Prefix increment: The operand is incremented before the expression is evaluated.
let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// Example Of  Postfix
let n = 3;
const m = n++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

// console.log(`n:${n}, m:${m}`);
/* The meaning of the writing `n:{n}is to print the value of the variablento the console with the labeln:`. This is useful for debugging and logging purposes.
The meaning of the give (             ) code is to print a space to the console. This is useful for formatting the output of the console.log() statement. */


// Example Of Prefix:
let c = 3;
const d = ++x;
// x is 4; y is 4

let c2 = 3n;
const d2 = ++x2;
// x2 is 4n; y2 is 4n

console.log(`c:${c}, d:${d}`);
console.log(`c2:${c2}, d2:${d2}`);

