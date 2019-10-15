'use strict';

// Code Signal questions
// question 3
function checkPalindrome(inputString) {
    let x = "";
    let value = false;

    for(let i = 0; i < inputString.length; i++){
        x = inputString[i] + x;
    }
    if (x === inputString){
        value = true;
    }
    return value;
}

//console.log(checkPalindrome("hello"));
//console.log(checkPalindrome("racecar"));

// question 4
function adjacentElementsProduct(arr){
    let x = 0;
    let y = 0;
    let min = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++){
        x = arr[i];
        y = arr[i + 1];
        if (x * y > min){
            min = x * y;
        }
    }
    return min;
}
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
// console.log([3, 6, -2, -5, 7, 3]);


//question 5
function shapeArea(n) {
    //self set to 1 to provide the first square
    let self = 1;
    let x = 0;
    let y = 0;
    let total = 0;
    for (let i = 1; i < n; i++){
        console.log(`before multiplication: ${x, y}`);
        x += 1 * n;
        y += 1 * n;
        console.log(x, y);
    }
    total = self + x + y;
    return total;
}

// console.log(shapeArea(3));

// question 6
function makeArrayConsecutive2(statues) {
    // let out = "";
    let missingNums = 0;
    let num1 = 0; //first num
    let num2 = 0; //second num
    let num3 = 0; //value to change missingNum
    let num4 = 0; //for -1 without changing num2

    statues.sort(function(a, b){return a-b});

    for(let i = 0; i < statues.length; i++){
        console.log(statues);
        num1 = statues[i];
        num2 = statues[i + 1];
        
        if (num2 - num1 > 1){
            num4 = num2-1; //subtracts 1 from the larger number
            num3 = num4 - num1;
            // console.log(num3);
            missingNums += num3;
        }
        num3 = 0;
        num4 = 0;
    }
    return missingNums;
}

// console.log(makeArrayConsecutive2([6, 2, 3, 20]));

// question 7
function almostIncreasingSequence(sequence) {
    let num1 = 0;
    let num2 = 0;
    
    // let sortedSequence = sequence.sort(function(a, b) {return a-b});
    // console.log(sortedSequence);

    for(let i = 0; i < sequence.length; i++){
        let sequenceV2 = sequence;
        num1 = sequence[i];
        num2 = sequence[i + 1];

        if (num2 - num1 > 1){
            
        }
        // sequenceV2[i] = 0;
        // console.log(sequenceV2);
        /*if(sequenceV2 === sortedSequence){
            return true;
        }*/
        return "return";
    }
}
// console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));