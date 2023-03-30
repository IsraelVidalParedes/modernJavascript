/* 
Strings, characters, and methods 
*/

// strings
console.log('hello, world');

let email = 'israel.vidal0306@gmail.com';
console.log(email);

// string concatenation 
let firstName = 'Israel';
let lastName = 'Vidal';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters 
console.log(fullName[0]); // This will return the first character of the string

// string length
console.log(fullName.length);

// string methods
{
    console.log(fullName.toUpperCase());
    let result = fullName.toLowerCase();
    console.log(result, fullName);
}


/*
NULL vs Undefined
*/
let age = null;
console.log(age, age + 3, `the age is ${age}`); 
// ↑(alt + 24) This will return undefined if there is no value assigned to the variable


/*
Booleans & Comparisons
*/
console.log(true, false, "true", "false"); 

// methods can return booleans
{
    let result = email.includes('@');
    let names = ['mario', 'luigi', 'toad'];
}

{
    let result = names.includes('luigi');
    console.log(result);
}