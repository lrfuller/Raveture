'use strict';
//all recursion really is, is calling the same function within itself, and having a 
//condition to escape the function. In our examples, we have an if loop that accomplishes this

//Recursion
function recursiveFactorial(n){
    console.log(`recursiveFacorial called with arg: ${n}`);
    if(n <= 1){
        return 1;
    }
    return n*recursiveFactorial(n-1);
}

function recursiveSum(n){
    console.log(`recursiveSum called with arg: ${n}`);
    //using && to create a range
    if (n <= 1 && n >= 0){
        return 1;
    }
    return n+recursiveSum(n-1);
}
// console.log(recF(5));

//console.log("factorial of 5 is:");
//console.log(recursiveFactorial(5));

//console.log("sum of 5");
//console.log(recursiveSum(5))




//String Reversal examples:
//1) Iteratively:
function iterSRV1(str){
    let out = ""; 

    for(let i=str.length-1; i>=0; i--){
        console.log(i);
        out = out + str[i];
        console.log(out);
    }
    return out;
}

//original way he showed us, but goes backwards
function iterSRV2(str){
    let out = "";

    for(let i=0; i<str.length; i++){
        //out = out + str[i]; //creates "hello"
        //will loop as long as the string, in this case 5 times
        
        //sets out to the string plus itself. Each time it gets a new value, it adds to itself
        out = str[i] + out;
        console.log(out);
    }
    return out;
}

//console.log(`iter hello: ${iterSRV1("hello")}`);
// console.log(`iter hello: ${iterSRV2("hello")}`);
//2) Recurssion:
function recurSR(str){
    if(str.length === 1){ return str[0]; }
    return recurSR(str.substring(1)) + str[0];
    //how substring works
    //"hello".substring(1) "ello"
    //"hello".substring(1,4) "ell"
    //"hello".substring(1,2) "e"
}
//console.log(`iter string reverse of hello: ${recurSR("hello")}`);








function funSR(str){
    //return str.split("");
    //return str.split("").reverse();
    return str.split("").reverse().join("");
}
//console.log(funSR("hello"));






function recurFB(n){
    console.log(`fib called ${n}`);
    if(n <= 1) { return 1; }
    return recurFB(n-1) + recurFB(n-2);
}
// console.log(`nth fib #: ${recurFB(10)}`);
