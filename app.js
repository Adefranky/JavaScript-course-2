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