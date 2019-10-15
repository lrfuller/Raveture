'use strict';
//returns a boolean if a string a palendrome
function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}

//console.log(checkPalindrome("car"));




//returns a string backwards
function recV1(str){
    if(str.length === 1){ return str[0]; }
    return recV1(str.substring(1)) + str[0];
}
function recV2(str){
    return recV1(str.substring(0));
}
//console.log(recV2("long text"));




let array1 = [1, -2, 3, 5, -1]; 
//https://stackoverflow.com/questions/46990569/given-an-array-of-integers-find-the-pair-of-adjacent-elements-that-has-the-larg
function adjacentElementsProductV1(inputArray){
    var arr = inputArray;
    var x = 0;
    var y = 0;
    var p = Number.MIN_SAFE_INTEGER; //keeps it from going out of bounds, in case a value is negative
    //loops through the array until it hits the maxlength
    for (let i = 0; i < arr.length; i++){
        //sets the x to the first value, and the y to the second on first initialization
        //after that, since y is always +1 of x, when the i increases, the y will always be adjacent
        x = arr[i];
        y = arr[i + 1];
        console.log(`x: ${x} y: ${y}`); //useful print statements
        //only sets p= to the product when x * y is greater to the previous product
        if (x * y > p){
            p = x * y;
            console.log(`p: ${p}`) //useful print statements
        };
    };
    return p;
};
function adjacentElementsProductV2(inputArray){
    let x = 0;
    let y = 0;
    let min = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < inputArray.length; i++){
        x = inputArray[i];
        y = inputArray[i + 1];
        if (x * y > min){
            min = x * y;
        }
    }
    return min;
}

// console.log(adjacentElementsProductV2(array1));






//given a year, it will return the century it is in,
// it will round up if it's one over 100, example 101 -> 200
function centuryFromYear(year) {
    return Math.ceil(year / 100);
 }
 