'use strict';

//returns a string backwards
function recV1(str){
    if(str.length === 1){ return str[0]; }
    return recV1(str.substring(1)) + str[0];
}
function recV2(str){
    return recV1(str.substring(0));
}

// console.log(recV1("long text"));
// console.log(recV2("long text"));


function recS(str){
    if (str.length === 1){
        return str[0];
    }
    return recS(str.substring(1)) + str[0];
}

function recSV2(str){
    if (str.length === 1){
        return str[0];
    }
    let val = recS(str.substring(1)) + str[0];
    return val;
}
// console.log(recS(5));
console.log(recSV2(5));


//Is recSV2 still recursion? 
//From my understanding, it just has to call itself, so setting a value instead
//of appending it to return would be the same thing right?
