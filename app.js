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

// The "for ...of" loop in js is a modern iteration statement introduced in ECMASCRIPT 6 (ES6) that provides a concise and easy way to loop over elements in ierable objects like arrays,
// stringsmaps,sets, and more. it allows you to iterate directly ovaer the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error prone.
// for (varaiable of iterable){}
let peoples = ["Frank", "allan", "andrew", "leonard"];

for (let people of peoples){
    console.log(people);
}

const text = "Hello";
for (const char of text){
    console.log(char);
}
// challenge
const array1 = ["a", "b", "c"];
for(const array of array1){
    console.log(array);
}

// for Each helper
// when we call the for each helper we pass in anonymous callback function
// this function gets called one time for every element in the array
// whatever is inside the function thatb logic happens
const colors5 = ["teal", "blue", "red", "green"];
colors5.forEach((color4)=> console.log(color4));

const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word,index, arr)=> {
    arr[index] = word[0].toUpperCase() + word.substring(1);
});
console.log(words);

// let numbers = [1, 4, 7, 8, 9];
// let sum = 0;
// function adder(number){
// sum += Number;
// }
// numbers.forEach(adder);

// console.log(sum);

// The map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array

let namba = [1,2,3,4,5];

let times = namba.map((num) =>num * 2);
console.log(times); 

let workers = 
[
{firstName: "Macom", lastNmae : "Reynolds"},
{firstName: "Kaylee", lastNmae: "Frye"},
{firstName: "Jayne", lastNmae: "Cobb"},
]

const results = workers.map(persona =>{
    return [persona.firstName, persona.lastNmae];
});
console.log(results);

let randomnum = [
    4, 6, 8, 2, 6
];
let multinum = randomnum.map((num) => num * 10);
console.log(multinum);

// The filter() method is a built in array method in js that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements  from an array based on a specified criteria.

const songs3 = [
    {name : "Lucy you", duration: 4.34},
    {name : "Just like You", duration: 3.23},
    {name : "The search", duration: 3.45},
    {name : "Old Town Road", duration: 4.23},
    {name : "The box", duration: 5.23},

];
console.log(songs3.filter(songs3 => songs3.duration>4));


const computers = [
    {ram : 4, hdd : 100},
    {ram : 8, hdd : 200},
    {ram : 16, hdd : 300},
    {ram : 32, hdd : 400},
];

console.log(computers.filter((com)=>com.ram > 16));

// challenge
const  ages =[ 
32, 33,16,40
];

console.log(ages.filter((age) =>age > 18));

const wordsz = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",

];
console.log(wordsz.filter((word) => word.length > 6));

// The find method is another built in array helper in js that allows you to find the first element in an array that matches  a specific condition. It returns the value of the first element that satisfies the given testing function, or defined if no element is found.
const peoplearr = [
    {name: "Frank", age : 27},
    {name: "john", age : 18},
    {name: "alaex", age : 20},
    {name: "jimmy", age : 30},
    {name: "alex", age : 30},

];
const result = peoplearr.find((person) =>person.name==="alex");
console.log(result);

const posts = [
    {id:1, content : "funny posts"} ,
    {id:2, content : "good posts"} ,
    {id:3, content : "sad posts"} ,
];

const postsres = posts.find((post) =>post.content==="funny posts");
console.log(postsres);

// challenge
const agesarray= [
    3,10,18,20
];
const arrages = agesarray.find((age) => age > 18);
console.log(arrages);

// The every() and same() are two built in array methods in js that allow you to checkthe elements of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each element of an array.
// The every() method tests whether all elements in an array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and fails if any element fails the condition.
// The same() method tests whether at least one element in the array passes te condition specified by the provided callback function. It returns true if the callback function returns true for atleast one element, and false if no element passes the condition.

const peoples3 = ["Frank", "Linus", "Tom"];
const res1 = peoples3.every((people) => people.length===4);
const res2 = peoples3.some((people) => people.length < 3)
const res3 = peoples3.some((people) => people.length >3);
console.log(res1);
console.log(res2);
console.log(res3);

// The reduce() method applies the reducer function to each element of an array, accumulating the results in to a single value. It is often used to perform calculations or  aggregations on array elements and simply the array into a single value.

const numbers = [1,2,3,4,5];
const sum = numbers.reduce((p, c) =>{
    return p+c;
}, 0);
console.log(sum);

// p = previous value and c = current value

const pipos = [
    {
        name: "Frank Web",
        age: "27",
    },
    {
        name: "alex med",
        age: 25,

    },
    {
        name: "Brain griffin",
        age: 40,
    },

];

const oldestAge = pipos.reduce((p, c) =>(c.age > p? c.age : p), 0 )
console.log(oldestAge);

const wards = [
    "apple",
    "banana",
    "orange",
    "banana",
    "apple",
    "orange",
    "apple",
    "grape",
];
const wordFrequency = wards.reduce((frequencyMap, ward) =>{
  frequencyMap[ward] = (frequencyMap[ward] ||0 + 1)  
  return frequencyMap;
}, {})
console.log(wordFrequency);

function calculateProduct(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);

}
const numberArr = [1,2,3,4,5];

const product = calculateProduct(numberArr);
console.log(product); // 120

// Map in js is a bilt in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object , but with a few key differences.
// Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, map allows you to use any data type as keys, including numbers, booleans, objects and even other map instances.

// Maintains insertion order: Map preserves the order of key-value pairs as they are inserted, while object keys may not be guaranteed to be in a specific order.
// Iteration: Map provides built-in methods for easy iteration over its elements.

const map = new Map();
const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "value of key one");
map.set(keyTwo, "value of key two");
map.set(keyThree, "value of key three");

console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);

// iterating to a map
for (let [key, value] of map) {
    console.log(`${key} -- $(value)`);
}

for (let key of map.keys()) {
    console.log(key);
}

// Iterating over to the values

for (let value of map.values()) {
    console.log(value);
}