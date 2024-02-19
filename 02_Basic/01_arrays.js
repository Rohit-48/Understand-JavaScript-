// arrays

const myArrays = [0, 1, 2, 3, 4, 5,]
const myHearos = ["Iron Man", "BatMan", "Thor", "Dr Strange"]

const myArrys2 = new Array(1, 2, 3, 4, 5, 6)

// console.log(myArrays[1]);
// console.log(myHearos[1]);

/**********Arrays Method******/


myArrays.push(6);  // Add 10 to the array
myArrays.push(7);  // Add 11 to the array
myArrays.pop(7);   // remove given num from arrays


myArrays.unshift(6); 
myArrays.shift();

// console.log(myArrays.includes(18));
// console.log(myArrays.indexOf(2));



const newArr = myArrays.join()

// console.log(myArrays)
// console.log(typeof(newArr))

// console.log(myArrays);  // Print the array

/*********Slice, splice */

console.log("A ", myArrays);

const myn1 = myArrays.slice(1,3)

console.log(myn1);
console.log("B ", myArrays);


const myn2 = myArrays.splice(1,3)
console.log("C ", myArrays);
console.log(myn2)

