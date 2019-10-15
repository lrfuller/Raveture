'use strict';




//Inheritence
function Pjj(name, age, fingers){
    this.name = name;
    this.age = age;
    this.fingers = fingers;
    this.func = function(){
        console.log(this.age)
    }
}
let pii = new Pjj("hi", 1, 4);
console.log(pii)

function Childy(name, age, fingers, school){
    this.school = school;
    this.__proto__ = new Pjj(name, age, fingers);
}

let c11 = new Childy("heyo", 1, 1, "man");
console.log(c11);



























//Closure
function getClicker(){
    let count = 0;
    function counter(){
        count = count + 1;
        return count;
    }
    return counter;
}
let clickerTracker = getClicker();

// let btn2 = document.getElementById("clicker2");
// btn2.addEventListener("click", () =>{
//     btn2.innerText = `clicks: ${clickerTracker()}`
// });











//practice bubbling later
// let propagate = true;






//ajax & forms

// let pokemonForm = document.getElementById("pokemonForm");
// pokemonForm.addEventListener("submit", (event) => {
//     //this and the above (event) prevents the default GET request to the same URL. We want to send it to Pokemon api
//     event.preventDefault();

//     // we can easily access user input in JS:
//     let num = pokemonForm.number.value;

//     //callback function to the func below
//     getPokemon(num, (pokemonObj) =>{
//         // logs the pokemon object
//         console.log(pokemonObj);
        
//         // get's the pokemon image
//         document.getElementById("pokemonImage").src = pokemonObj.sprites.front_default;
//     });
// });




// function getPokemon(number, onSuccess){ //take in a number & callback function
//     // This object is provided by the browser to let us do AJAX
//     let xhr = new XMLHttpRequest();
    
//     // we next define what to do as the request-response lifecycle proceeds
//     //everythime the callback changes, it calls the next if statement
//     xhr.addEventListener("readystatechange", () =>{
//         console.log(`ready state: ${xhr.readyState}`);

//         // when ready state reaches 4, we have the response:
//         // we need to use 4,
//         if (xhr.readyState === 4){
//             let responseJson = xhr.response;
//             // console.log(responseJson);

//             // Working with JSON strings:
//             // JSON.parse to "deserialize" (read) JSON
//             // JSON.stringify to "serialize" (write) JSON

//             // We know that we've received a response, but we don't know if our request was successful

//             // HTTP response status codes 200-299 mean success
//             if (xhr.status >= 200 && xhr.status < 300){
//                 console.log("HTTP Status Code says success!");

//                 let responseObj = JSON.parse(responseJson);
//                 console.log(responseObj);

//                 // callback function
//                 onSuccess(responseObj);
//             }else{
//                 // Error occured
//                 // either bad request or server had trouble parsing it
//                 console.log("failure");
//                 console.log(responseJson);
//             }
            
//         }
        
//     });
//     // set up the request we want to send
//     xhr.open("get", `https://pokeapi.co/api/v2/pokemon/${number}`);

//     // actually send the request
//     xhr.send();

// }
