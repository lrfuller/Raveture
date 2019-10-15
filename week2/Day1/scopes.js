'use strict';
//Before ES6 we used var to declare variables
//now we have let and it's better
//but by default we should declare variables with const!

var x1; //function or global scope
let x2; //block scope
const x3 = 4; //like let but can't be changed

//block scope
//{};

if (true){
    var y1 = "var y"; //var is still global scope
    let y2 = "let y"; //let is block scope
};
//console.log(`var y: ${y1}, let y: ${y2}`); //y2 won't run here

//in JavaScript, variables declarations are "hoisted" to the top of their scope:
console.log(z);
var z = "hi"; //doesn't work with let/const...
console.log(z);

//function scope is defined inside a function. Note that function bodies are blocks, so let works fine


