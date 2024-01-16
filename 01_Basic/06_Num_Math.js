const score = 400
// console.log(score)

const balance = new Number(100)

// console.log(balance);


// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const otherNuumber = 32.97443

// console.log(otherNuumber.toPrecision(5));

function precise(x) {
    return x.toPrecision(4);
  }
  
//   console.log(precise(123.456));
  // Expected output: "123.5"
  
//   console.log(precise(0.004));
  // Expected output: "0.004000"
  
//   console.log(precise(1.23e5));


/**************Using toPrecision***************/
const num1 = 35.474897;


// console.log(num1.toPrecision(5));  // Output: 35.475 (rounded to 5 significant digits)
// console.log(num1.toPrecision(2)); // '5.1'
// console.log(num1.toPrecision(1)); // '5'

num2 = 0.0009875

// console.log(num2.toPrecision());
// console.log(num2.toPrecision(5));
// console.log(num2.toPrecision(2));
// console.log(num2.toPrecision(1));


// note that exponential notation might be returned in some circumstances
// console.log((1234.5).toPrecision(2)); // '1.2e+3'


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


/*************************MATH ************************/
// 
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(25));
// console.log(Math.min(3, 5, 6, 7));
// console.log(Math.max(3, 5, 6, 7));




// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1) + min));


