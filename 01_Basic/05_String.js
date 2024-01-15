const name = "Rohit"
const repoCount = 40

// console.log(name + repoCount + " Value");

// console.log(`Hello My Name Is ${name} and My repo Count is ${repoCount}`);


const gameName = new String('Rohit-God-Time')

// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.bold());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8, -4);  // Start at index -8 (inclusive), end at index -4 (exclusive)
// console.log(anotherString);  // Now this will print "GodT"

const newStringone = "      Rohit       "
// console.log(newStringone);
// console.log(newStringone.trim());



const url = "https://rohit.ai/Rohit%20blog"
// console.log(url.replace('%20', '-'));

// console.log(url.includes("rohit"));





/**************Split ***********/

console.log(gameName.split('-'));

/**************More Example***********/
const str1 = "The greatest glory in living lies not in never falling, but in rising every time we fall"

const words = str1.split(' ');
// console.log(words[4]);

const char = str1.split('');
// console.log(char[6]);

const strcopy = str1.split();
// console.log(strcopy);


// revision