'use strict';

console.log('Hello from inside types.js');

// types! in JS variables do not have type.
// we say they are "dynamically typed"

// the types in JavaScript:
var x; //the type of x is undefined

//all of these are undefined:
x = undefined;
x = {}.name; //undefined because of uninitialized variable or property
x = "abc"[5];

// Many programming Languages have 'objects'
// Java is an Object-Oriented Language

// JavaScript is Object-Based not Object-Oriented

// Objects in JavaScript are defined with {}, and can have properties
// (like variables attached to the object)
// and methods (like functions attached to the object)

// type number
x = 1;
x = 3.14;
x = -70;
x = Infinity;
x = -Infinity;
x = 4 / 0; // Infinity
x = 5 / 'abc'; // NaN is of type number
x = NaN + 5; // also going to be NaN

// type string
x = "abc";
x = 'abc'; // single or double quotes make no difference
// there are no chars in js, only strings
x = "abc"[1]; //this is a string, it will return "a"

// types of boolean
// a boolean is either true or false:
x = true;
x = false;

// type object
x = {} // empty object
x = {
    name: 'adam',
    height: 6
};

// access the properties of an object with [] or
console.log(x);
console.log(x.name);
console.log(x['height']);

// we can add additional properties, or edit properties
x.lastname = 'king';
x.height = 6;

// functions are still of type object, though typeof will return function.
let doesSringHaveA = function(s) { return s.includes("a")}; // returns a boolean

// something to know: EVERYTHING in js is an object

// type null
x = null;
// different from undefined in that undefined has to do with non-assignment
// if I didn't have a last name:
//x.lastname = null;

// in review, js has only these types:
// number, string, boolean, object
// undefined, null

typeof(null); // returns object -- though it really shouldn't


