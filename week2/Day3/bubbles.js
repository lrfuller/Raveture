'use strict';

// In JS an event is handled by each element that has a listener for it. The order that elements handle an event
// is dtermined by bubbling v. capturing.

// using bubbling, event listeners fire inside -> outside
// using capturing outermost -> innermost
// outermost then innermost

// we can stop propogation of an event, but we shouldn't
let propagate = true; // this will prevent the other elements from being called if set to false




//the callback function we give to event listeners can have a single argument -- the event itself
function eventLogCallback(event){
    console.log(event);
    alert(`Callback called for element with id: ${this.id}`);
    //if you wanted to make something else happen, you change it here
    if (!propagate) event.stopPropagation(); //toggles the propogation
}

// we determine whether or not we're using capturing by passing a boolean as a third argument to 
// addEventListener();
//if true capturing, if false bubbling
let useCapture = false; //this will reverse the order they are called if set to true

function eventLogCB(event){
    console.log(event);
    alert(`Callback called for element with id: ${this.id}`);
    if (!propogate) event.stopPropagation;
}



document.getElementById("outer")
        .addEventListener("click", eventLogCallback, useCapture);
document.getElementById("inner")
        .addEventListener("click", eventLogCallback, useCapture);
document.getElementById("innermost")
        .addEventListener("click", eventLogCallback, useCapture);

let propButton = document.getElementById("propToggle");




propButton.addEventListener("click", () =>{
    propagate = !propagate;
    if (propagate){
        propButton.innerText = "Turn Propagation Off"; //if on, get option for off
    }else{
        propButton.innerText = "Turn Propagate ON";// if off, get option for on
    }
});