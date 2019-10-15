'use strict';

// if you want to put this script in the head instead of the body:
// you should use an event Listener:
// window.addEventListener('DOMContentLoaded', () => {
//      everything goes in here...
// });

//for us, the DOM is already loaded, since the script is at the bottom
window.document.body.style.backgroundColor = "blanchedalmond";

// to begin, in js there is a special global object called window
// every variable in global scope is actually stored on the window

// we can select elements a few different ways:
// GetElementById, get ElementsByClassName,
// getElementByTagName, and the querySelector that uses css selector

//get element by id in 2 ways:
let main_p = document.getElementById("main-text");
main_p = document.querySelector("#main-text"); //uses css selector

//once we have an element, we can manipulate it.
main_p.innerText = "this is the next text";

//much more interesting are dynamic manipulations:
let counter = 0;
main_p.addEventListener("click", () => {
    counter = counter + 1;
    main_p.innerText = `This has been clicked : ${counter} times`;
});

let btn = document.getElementById("btn");
let clicked = false;

btn.addEventListener("click", () => {
    clicked = !clicked;
    if (clicked) {
        document.body.style.backgroundColor = "red";
    } else{
        document.body.style.backgroundColor = "blue";
    }
});

let second = document.getElementById("second");
second.style.height = "100px";
second.style.width = "100px";
second.style.border = "5px solid black";

second.addEventListener("mouseover", () => {
    //create the element
    let child_div = document.createElement('div');
    //style it:
    child_div.style.height = "20px";
    child_div.style.width = "20px";
    child_div.style.backgroundColor = "white";
    //actually append it to the document:
    second.appendChild(child_div);
})