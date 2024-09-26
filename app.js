// Template strings, also known as template literal , are a feature in js that allows you to create strings with embedded expressions. They are denoted by backticks `` instead of double or single quotes. Template strings provide a more  flexible and concise way to construct strings, especilally when they involve variables or expressions.

// console.log(
//     'this is some
//     random Text.'
// );   => will give an error. to correct that

// console.log( 
//     "this is some\
//     random Text"
// );

// but the best way is to use template literals
console.log(`this is some
    random text`);


    // expresiions
    const firstName = "Frank";
    const lastNmae = "webDev";
     
    console.log(` my name is : ${firstName} ${lastNmae}`);
    console.log(`${["one", "two", "three"]}`);


    function info(){
        return `my name is frank elias and i am 27 years old. `;
    }
    console.log(`${info()}`);

    // challenge
    console.log(`The quick
        brown fox
        jumps over
        the lazy dog`);

        const nameOne = "Frank";
        const nameTwo = "Elias";

        console.log(`my name is  ${nameOne} ${nameTwo}`);

        // Arrow functions
        
// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in js. they were introduced in ECMASCRIPT 6 (ES6) and provide a more compact syntax compared to traditional function expressions
// function greet(username){
//     return `Hello ${username}`;
// }
// console.log(greet('frank'));

// arrow function
// greet = (username) => {
//     return `Hello ${username}`;
// }
// console.log(greet('frank'))

// or
const greet = (username) => `Hello ${username}`;
console.log(greet('frank'));

// function double(number){
//     return number * 2;
// }
// console.assert;
// log(double(5));

// arrow
// const double = (Number) => Number * 2;
// console.log(double(10));

// or
const double = n => n * 2;
console.log(double(10))

// Enhanced object literals
// Enhanced object literaals, introduced in ECMASCRIPT 6 (ES6), are a set of enhancements to the syntax for defining objects in js. These enhancements make it more convenient and concise to define object properties and methods
//  function user(name,age,work){
//     return{
//         name: name,
//         age: age,
//         work: work,

//     };
//  }

// literals
function user(name, age, work){
    return {
        name,
        age,
        work,
        intro: () => {
            console.log(`my name is ${name} and i am ${age} years old and i am ${work}`);
        },
    };
}
 const frank = user('frank', 27, 'programmer');
 const johnstone = user('stone', 20, ' developer')
 console.log(frank.intro());
 console.log(johnstone.intro());

//  Default function parameters , introduced in ECMASCRIPT 6 (ES6), allow you to assign default values to function parameters. When a function is called , and an argument is not provided for a parameter, the dafault value will be used insted. the feature makes it easier to handle cases where arguments might be missing or undefined.
function countTo5(count = false){
if(count === true){
    for (let i = 1; i <= 5; i++){
        console.log(`count: ${i}`);
    }
}
}
countTo5(true);

function ratings(rate = 0){
    if (rate ===5){
        console.log(`High ratings :)`);
    } else if (rate === 0 ){
        console.log(`Low Ratings :(`);
    }
}
ratings(5);

// challenge
function multiply(a,b = 1){
    return a * b
}
console.log(multiply(5))

// The spread operator is  a new addition to the set of operators in js ES6, it takes in an iterable (eg an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of js objects. using this operators makes the code concise and enhances its readability
//  with functions, arrays and objects

function giveme4 (a,b,c,d){
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

const colors =  ["red", "blue", "green", "teal"];
giveme4(...colors);

// arays
const strNums = ["one", "two", "three"];
const moreStrNmaes = ["four", "five", "six"];
const concat = [ ...strNums, ...moreStrNmaes];

console.log(concat);

let people = ['frank', 'john', 'joel'];
const peps = ['kumar', ...people, 'johana'];
console.log(peps);

// objects
const obj1 = {x:1, y:2};
const obj2 = {z:3};
const obj3 = {...obj1, ...obj2};
console.log(obj3);

let person = {
    name : "frank",
    age : 27,
    gender : "male",
};
const clone = {...person};
console.log(clone);
console.log(person);

// challenge
let arr = [1, 2, 3];
let arr2 = [4,5];
const arr3 = [...arr, ...arr2];
console.log(arr3);

const owner = {
    name : 'john',
    age : 22
};
const man = {...user};
console.log(owner);

// The rsey parameter syntax allows a function to accept an indefinite number of arguments .
// as an array, providing a way to represent variadic functions in js
function userm(...userData){
    console.log(userData);
}
userm("frank", 19, "programming", "football");

function myName(firstName, lastNmae, ...hobbies){
    console.log("first Name:" , firstName);
    console.log("last Name:", lastNmae);
    console.log("Hobbies:", hobbies);
}
myName("frank", "Webdev", "programming", "football", "singing");

// challenge
function unknown(firstName, lastNmae, ...career){
    console.log("first Name:", firstName);
    console.log("last Name:", lastNmae);
    console.log("career:", career);
}
unknown("frank", "webdev", "programming", "agriculture", "Developer");

// Destructuring allows us to "unpack" values from data-structures (Arrays, objects) into separate distinct variables.
// const foo = ["one", "two", "three"];
// const one = foo[0];
// console.log(one);

const fool = ['one', 'two', 'three'];
const [one, two, three] = fool;
console.log(one);
console.log(two);
console.log(three);

// destructuring
const fooo = ['one', 'two'];
const [uncle, yellow, green, blue] = fooo;
console.log(green);
console.log(yellow);

// providing default values
// let a, b;
// [a=5, b=8] = ["one", "two"];
// console.log(b);    ans two

// let a, b;
// [a=5, b=8] = ["one"];
// console.log(b);
// // ans =8

function f(){
    return [1,2];
}
let a, b;
[a,b] = f();
console.log(a);
console.log(b);

function f1(){
    return [1,2,3]
}
const [c, , d] = f1();
console.log(c);
console.log(d);

// assigning the rest of an array to a variable
const [e, ...g] = ["one", "two", "three"];
console.log(g);

// challenge
const colours = ["red", "green", "blue", "yellow", "orange"];
// let color1, color2, color3;
const [color1,color2, color3] = colours;
console.log(color1);
console.log(color2);
console.log(color3);

// Object destructuring
const student = {name: "Frank",  position :"First", rollNo: 27};
const {name,position,rollNo} = student;
console.log(name);
console.log(position);
console.log(rollNo);

// challenge
const me = {
    Fname: "Frank Elias",
 age: 27,
 gender: "male",
 country : "USA",
};
const {Fname, age, gender, country} = me;
console.log(Fname,age,gender,country);


// Renaming our variables in js
const numb = {x:100, y:200};
const {x:new1, y:new2} =numb;
console.log(new1);
console.log(new2);

// object destructuring and rest opertaor
let {i, j, ...rest } = {i:100, j:200, c:300, d:400, e:500};
console.log(i);
console.log(b);
console.log(rest);

// function destructuring in js
const tourist = {
    name: "john doe",
    age : 20,
    country: "USA",
}
function printPersonInfo({name, age, country}){
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`country :${country}`)
}

printPersonInfo(tourist);

// Nested Destructuring in js
// Destructuring inside destructuring
const songs = [
    {name: "Lucy You", singer: "Joyner", duration: 4.34},
    {name: "Just Like You", singer: "NF", duration:2.33},
    {name: "Humble Singer", singer: "Kendrick Lamar", duration:3.23},
    {name: "Old Town Road", singer: "Lil Nas X", duration:1.34},
    {name: "cold shoulder", singer: "Central Cee", duration:5.23},
];
const [, , , {singer}] = songs;
console.log(singer);

// Destructuring mixture
const data = {
    user1: {
        id: 123,
        name1: "John Doe",
        age1: 30,
        email: "johndoe@gmail.com",
        address: {
            city : "New York",
            country1: "USA",
        },
        hobbies : ["Reading", "Painting", "cooking"],
        scores: {
            math: 95,
            science: 88,
            history: 75,
        },

    },
    products:[
        {id:1, name1:"Laptop", price:1000},
        {id:2, name1: "phone", price:800},
        {id:3, name1: "Tablet", price:500},
    ],
    settings: {
        darkmode:true,
        notifications:{
            email:true,
            sms:false,
            push:true,
        },
        language:"English",
    },
};

const {
    user1: {
        name1,age1, address:{city, country1},
        hobbies,
        scores: {math, science, history},
        email,
    },
    products:[product1, product2, product3],
    settings:{
        darkmode,
        notifications: {
            email: emailNotification,
            sms: smsNotification,
            push: pushNotification,
        },
        language,
    },
} = data;
console.log(`name1: ${name1}`);
console.log(`age1: ${age1}`);
console.log(`address: ${city} ${country1}`);
console.log(`hobbies: ${hobbies.join(",")}`);
console.log(`math score: ${math}`);
console.log(`science score: ${science}`);
console.log(`history score: ${history}`);
console.log(`product1: ${product1.name1} - $${product2.price} `);
console.log(`product1: ${product2.name1}- $${product2.price} `);
console.log(`product1: ${product3.name1} - $${product2.price} `);
console.log(`dark mode: ${darkmode}`);
console.log(`email Notification: ${emailNotification}`);
console.log(`sms Notification: ${smsNotification}`);
console.log(`push Notification: ${pushNotification}`);
console.log(`language: ${language}`);


// Ternary operator in js
// The ternary operator in js is a concise way of writing conditional expressions. 
// It is the only js operator that takes 3 operands: a condition followed by a question mark (?),
// an expression to execute if the condition is true, followed by a colon(:),
// and an expression to execute if the condition is false.

// Condion ? eprIfFalse;
// let password =2;

// function passwordChecker(ps){
//     if (ps ===8){
//         return `Strong Password`;

//     }else{
//         return "password should be 8 characters."
//     }

// }
// // console.log(passwordChecker(2));

// const res = passwordChecker(2);
// console.log(res);

// ternary
let password = 5
function passwordChecker(ps){
    return ps ===8? `strong password` : "password should be 8 characters.";
}
const res = passwordChecker(2);
console.log(res);

const miaka = 25;
const isAdult = miaka >= 18 ? "Adult" : "Not an Adult";
console.log(isAdult);

// Challenge
const money = 25;
const hasMoney = money >= 25 ? "Buy products" : "Bring Money";
console.log(hasMoney);

// The "for ...in " loop in js is used to iterate over the enumerable properties of an object.
// It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}
let person2 = {
    name: "Frank",
    age: 27,
    gender: "Male",
};
for (let keys in person){
    console.log(keys);
}

let list = ["one", "two", "three", "four"];

for (let index in list) {
    console.log(`${index}: ${list[index]}`);
}

// challenge
const object = {a:1, b:2,c:3}; 
for (let index in object){
    console.log(`${index}: ${object[index]}`);
}