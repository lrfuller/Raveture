'use strict';

console.log("hello from equality.js!");

// there are 2 types of equals in js:
// double equals: ==
//        compares value without comparing type
// tripple equals: ===
//        compares value AND type

// same as let compare = function...
function compare(a, b){
    // New in ES6 is String interpolation
    // uses backticks `` and ${} to display
    // variables/js inside of strings
    //"c" + "a" + "b"
    console.log(`a: ${a}, b: ${b}`); //${will run JS}       won't treat it as a string
    console.log(` a == b: ${a == b}`);
    console.log(` a === b: ${a === b}`);
}
compare(45, "blue");
compare(45, "45");
compare(1, 1);
compare("", 0);
compare(1, 1.0);
compare(0, {});
compare(null, {});