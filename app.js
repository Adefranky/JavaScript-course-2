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



