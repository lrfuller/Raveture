'use strict';

// objects can have functions as properties : methods
let obj = {
    name: 'Adam',
    sayName: function(){
        //inside a method, "this" refers to the object
        console.log(this);
        console.log(this.name);
    }
}

//obj.name;
obj.sayName();

//a callback function:
// it basically calls a function
// a function that is passed into another function as an argument
// the callback is called when the outer function returns.

function add(a, b, callBack){
    let result = a + b;
    callBack(result);
}
add(1, 2, console.log);

// we use callBack functions so we can inject different behaviour
// and apply that behaviour to the result.
// There are multiple ways to define functions in-line to facilitate using callBack functions.

add(3, 4, function(x) { console.log(x+10)});

//we can do this:
(function(x){console.log(x+10)})(22);

//another way to write the same thing:
// with an arrow function
add(3, 4, (x) => {console.log(x+10)});

// when we are working with a single arument and expression:
add(3, 4, x => console.log(x+10));