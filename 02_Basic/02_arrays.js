const marvel_Heros = ["Ironman", "Thor", "Loki"]
const DC_Heros = ["Superman", "Flash", "Batman"]

// marvel_Heros.push(DC_Heros)
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][2]);

// const allHeros = marvel_Heros.concat(DC_Heros)
// console.log(allHeros);


const allNewHeros = [...marvel_Heros,...DC_Heros]
// console.log(allNewHeros);


const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4 , 5]]]

const real_useable_Array = another_Array.flat(Infinity)

// console.log(real_useable_Array);

// console.log(Array.isArray("Rohit"));
// console.log(Array.from("Rohit"));
// console.log(Array.from({name: "Rohit"})); // Interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));

