'use strict';

// closures
// accessible to a function, but not accessible directly. Allows us to make private functions

// our original clicker counter looked like this

/*
    let counter = 0;
    main_p.addEventListender("click", () => {
        counter = counter + 1;
        main_p.innerText = `This has been clicked ${counter}`;
    })
*/

// Anywhere in our code, we could directly modify the counter variable, which would make it not accurate to clicks

// let's solve the problem with a closure!

// Closure has 4 essential pieces:
// the outer function
function getClickerCounter(){
    // 2: the "closed over" variable that we make "private"
    let counter = 0;
    
    // 3: the inner function that modifies/returns the private variable
    function count(){
        counter = counter+1;
        return counter;
        // or return ++counter adds 1 before returning
        // return counter++ adds 1 after returning
    }

    // 4: the outer function's return statement
    // where it returns the inner function
    return count; // returns the function itself count above. line 27 
    //It doesn't walk through the function count to return the number counter
}

function getC(){
    let counter = 0;
    function count(){
        counter = counter+1;
        return counter;
    }
    return count;
}
let btn = document.getElementById("clicker");

btn.addEventListener("click", () =>{
    btn.innerText = `This has been clicked ${clickerCounter()} times`;
});












let clickerCounter = getClickerCounter(); // sets getClickerCounter to a function, not a number

// console.log(clickerCounter());
// console.log(clickerCounter());
// console.log(clickerCounter());

let clickerCounter2 = getClickerCounter();

// console.log(clickerCounter2());
// console.log(clickerCounter2());
// console.log(clickerCounter2());



// a little more fun example:
function makeCounter(n){
    let count = 0;

    function countNoun(){
        return `${n} count is: ${++count}`;
    }

    return countNoun;
}

let catCounter = makeCounter("Cat");
let birdCounter = makeCounter("Bird");
// console.log(catCounter());
// console.log(birdCounter());