// Exercises, starting from scratch.

// Functions take in an (optional) input, (optionally) do something,
// and return an (optional) output.  This is a function with no
// inputs, no output, and that does nothing:

function uselessFunction() {

}

// Here is a function that takes in one input, does nothing, and
// has no output.  We call the thing in parentheses, that goes
// into the function, an argument.
function uselessFunctionWithArgument(arg) {

}

// Those two things we wrote above are function declarations.
// That means those functions are stored in memory, but they
// haven't been "executed" yet.  We execute a function by calling it:
// writing its name with () afterwards, with arguments inside the
// () if necessary.
uselessFunction(); // this calls/runs/executes/invokes uselessFunction

// The argument(s) given to a function can be different each time
// the function is called.  This means your function can give
// different output or do different things based on the input
// uselessFunctionWithArgument(1);
// uselessFunctionWithArgument("fep");
// uselessFunctionWithArgument([1,2,3,4]);

// Our useless function does nothing, because there's nothing inside
// the block {} where we define the function.

// Let's write a "hello world" function.  This is normally the first
// function you write when you're learning a new programming language.
function helloWorld() {
    console.log("Hello, World!");
}

// Remember that the above is a function declaration, meaning we still
// need to call the helloWorld function for it to run:
// helloWorld(); // this is the line that actually logs "Hello, World!"

// More interesting functions take in and use arguments (inputs):
function logFunction(arg) {
    console.log(arg);
}

// logFunction(1);
// logFunction("fep");
// logFunction([1,2,3,4]);

// We can do much more than just log inside of our functions.  We can
// do math, call other functions, create variables...

function logFunctionWithVariable(arg) {
    let variableInsideFuncton = arg;
    console.log(variableInsideFuncton);
}

function logFunctionSumOfArgs(arg1, arg2) {
    let sum = arg1 + arg2;
    console.log(sum);
}

// Most of the functions we write won't just log something to the console.
// They'll provide an output or a return.
// We specify what a function returns by using a return statement:

function uselessFunctionWithReturn() {
    return null;
}

function sumOfArgs(arg1, arg2) {
    let sum = arg1 + arg2;
    return sum;
}

// When a function returns something, we can use that return value
// in our code, potentially as input to other functions.  If we just
// call the function by itself, the return value won't do anything:
// sumOfArgs(1,3); //this line runs the function, but doesn't display
                //or assign the return value

// console.log(sumOfArgs(3,4)) // this line logs 7 to the console.

// Our functions can take in whatever value we like.  We often work
// with arrays:
function getFirstElement(array) {
    let firstElement = array[0];
    return firstElement;
}

console.log(getFirstElement(["e","f","h"]));

//
//  EXERCISES:
//  Write the bodies of the following functions.
//  in each case the function should return the value
//

function getSecondArgument(arg1, arg2, arg3) {
    return arg2;
}

console.log(getSecondArgument(2,4,6));

function getArrayOfArguments(arg1, arg2, arg3) {
    let arr = [arg1, arg2, arg3];
    return arr;
}

console.log(getArrayOfArguments(3,7,11));

function convertToBoolean(arg) {
    let stuff = (arg === 'true');
    return stuff;
}

console.log(`Convert to Boolean: ${convertToBoolean(77)}`);

function sumThreeArguments(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
}

console.log(`Sum Three Arguments: ${sumThreeArguments(2,2,5)}`);

//
//  EXERCISES:
//  Write the body of the following functions.
//  In each case the function should print the values
//  (printing means logging to the console)
//

function printOneToFive() {
    console.log("Print one to five:");
    
}

printOneToFive();

function printThreeArguments(arg1, arg2, arg3) {
    console.log("Print Three Arguments:")
    console.log(arg1, arg2, arg3)
}

printThreeArguments("a", "c", "e");

function printOneToThreeHundred() {
    console.log("Print One To 300:");
    for (let i = 0; i < 300; i++){
        console.log(i);
    }
}

printOneToThreeHundred();

function printArrayElements(array) {
    console.log("Print array elements:");
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printArrayElements([1,3,4,5,6]);
printArrayElements(["a",2,3,"b"]);

function printOddArrayElements(array) {
    console.log("Print odd array elements:");
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2){
            console.log(array[i]);
        }
    }
}

printOddArrayElements([1,2,3,4,5,6,7]);
printOddArrayElements([2,4,6,8]);