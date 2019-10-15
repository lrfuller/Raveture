'use strict';
/*
    3. Interleave arrays
    
    Given two arrays with the same length, return an
    array produced by interleaving the two arrays
    f([1,2,3], [7,8,9]) = [1,7,2,8,3,9]
    f(["a","b"], [10, 20]) = ["a", 10, "b", 20]
*/


function inter(a1, a2){
    //will be the total array that holds both arrays within
    let totalArray = [];
    
    // step through the first array
    for (let i = 0; i < a1.length; i++){
    // copy each value to the totalArray
        totalArray += a1[i];
    }

    //step through the second array
    for (let i = 0; i < a2.length; i++){
    //copy each value to the totalArray
        totalArray += a2[i];
    }
    return totalArray;
}

// console.log(inter([1,2,3], [7,8,9]));
// console.log(inter(["a","b"], [10, 20]))









function interV5(a1, a2){
    //sets an array that will return both a1 & a2 in one
    let totalArray = [];
    //loops through the first array's size, since they are both the same
    for (let i = 0; i < a1.length; i++){
        //set's the next 2 values to the first and second array
            totalArray += a1[i];
            totalArray += a2[i];
    }
    return totalArray;
}

console.log(interV5([1,2,3], [7,8,9]));
console.log(interV5(["a","b"], [10, 20]))


//not sure how to get the brackets to show up though... 











function interV2(a1, a2){
    //will be the total array that holds both arrays within
    let totalArray = [];
    let totalLength = a1.length + a2.length;
    
    // step through the first array
    for (let i = 0; i < totalLength; i++){
    
        //if the value is less then 3, then it will loop through the first array
        if (i < 3){
            // copy each value to the totalArray
            totalArray += a1[i];
        //when i = 4 to 6 values, then it will set the second array
        }else{
            // copy each value to the totalArray
            totalArray += a2[i-3];
        }        
    }

    return totalArray;
}
// console.log(interV2([1,2,3], [7,8,9]));

//only works for the first value, but was trying to use only 1 for loop.











//doesn't work, but I was attempting recursion as well
// function iterV3(a1, a2){
//     let totalArray = [];
//     let totalLength = a1.length + a2.length;
//     if (totalLength < 1){
//         totalArray = a1
//     }
//     return iterV3(a1, a2) + totalLength-1;
// }

// console.log(interV3([1,2,3], [7,8,9]));



















/*
    BONUS 1: Valid square brackets
    Given a string, return true if it contains no mismatched square brackets
    f("[]") = true;
    f("[[hi]") = false;
    f("hi[[][]]bye") = true;
    f("[[1][0]") = false;
    f("JavaScript rules!") = true;
*/



//started, but didn't finish
function sBrack(s){
    let bracket = 1;
    let brackOdd = bracket % 2; //used to test if it's odd or even
    console.log(brackOdd);
    // if (){
        // console.log()
    // }

    // for (let i = 0; i < s.length; i++){
    //     if ("["){

    //         if("]"){
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     }

    // }
}

// console.log(sBrack());