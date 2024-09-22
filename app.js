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

        // Error functions
        