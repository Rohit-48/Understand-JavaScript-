// singleton
// Object.create

// Object literals 
// Important for Interviews

const mySym = Symbol("Key1")


const  Jsuser = {
    name: "Rohit",
    "Full Name": "Rohit Mandavkar",
    [mySym]: "myKey1",
    age: 19,
    location: "Sati",
    email: "rohit@openai.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Friday"]
} 


// console.log(Jsuser.name);
// console.log(Jsuser["name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "Rohit@apple.com"
// Object.freeze(Jsuser)
Jsuser.email = "Rohit@google.com"
// console.log(Jsuser);


Jsuser.greeting1 = function(){
    console.log("Hello JS User");
}
Jsuser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(Jsuser.greeting1());
// console.log(Jsuser.greeting2());


