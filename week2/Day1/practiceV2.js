'use strict';
// shouldn't work V
function rec(str){
    let out = "";
    for(let i = 0; i - str.length; i++){
        out = str[i] + out;
    }
    return out;
}
// console.log(rec("hello"));

function rec2(str){
    let out = "";
    for(let i = str.length-1; i >=0; i--){
        out = out + str[i];
    }
    return out;
}
// console.log(rec2("hello"));
function rec3(str){
    let out = "";
    for (let i = 0; i<str.length; i++){
        out = str[i] + out;
    }
    return out;
}
//console.log(rec3("hello"));

function recP1(str){
    let out = "";
    for(let i = 0; i < str.length; i++){
        out = str[i] + out;
    }
    return out;
}

// console.log(recP1("hello"));
