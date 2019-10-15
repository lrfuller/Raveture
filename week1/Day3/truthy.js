'use strict';

function convertToBool(x){
    let bool = Boolean(x);
    console.log(`${x} as boolean: ${bool}`);
}

// In practice, we'll see this in if statements.

convertToBool(3 === 2);


if (s){
    console.log(`s has length: ${s.length}`);
} else{
    console.log("s was empty");
}

if (3 === 2){
    console.log("true");
} else{
    console.log("false");
}