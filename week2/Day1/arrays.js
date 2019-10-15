'use strict';

//create an array in JS using []
let myArr = []; //empty array
myArr = [1,3,5,7]; //array of numbers

//access indicies like with strings
myArr[2]; //5

//iterate through with index:
for(let i=0; i<myArr.length; i++){
    console.log(`iter with index: ${myArr[i]}`);
}

//iterate through with for of loop:
for(let e of myArr){
    console.log(`iter with for of: ${e}`);
}

//we already saw reverse():
myArr.reverse();
console.log(myArr);

//creates a new array by filtering another array. The callback function returns true or false
// based on whether the given element should be included.
let newArr = myArr.filter((e) =>{
    return e < 5; //returns 3, 1 out of the array
});
console.log(`new array: ${newArr}`);

//map applies a function to each element of an array
//and returns a new array with the return values
let timesTwoArr = myArr.map((e) =>{
    return 2 * e;
});

console.log(`times two array: ${timesTwoArr}`);

//reduce applies a function to 2 elements of an array
// and then calls the reduce function with that return
// and the next array element, until the end of the array is reached

let sum = myArr.reduce((e1, e2) =>{
    return e1 + e2;
});

console.log(`sum : ${sum}`);

//a good use for reduce is finding the max
//myArr.push(13);//add an element
let max = myArr.reduce((e1, e2) => { //need 2 arguments
    return Math.max(e1, e2);
});

console.log(`max : ${max}`);



