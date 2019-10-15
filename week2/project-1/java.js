'use strict';

// AJAX is Asynchronous JavaScript and XML, meaning it works independantly from our main program flow.
// It's asynchronous because we have to wait while we send HTTP and get a response.

// getPokemon(45, console.log)
//does the process without the button


let pokemonForm = document.getElementById("personSearch");
pokemonForm.addEventListener("submit", (event) => {
    //this and the above (event) prevents the default GET request to the same URL. We want to send it to Pokemon api
    event.preventDefault();

    // we can easily access user input in JS:
    let num = pokemonForm.number.value;

    //callback function to the func below
    getPokemon(num, (pokemonObj) =>{
        // logs the pokemon object
        console.log(pokemonObj);
        
        // get's the pokemon image
        // document.getElementById("pokemonImage").src = pokemonObj.sprites.front_default;
        document.getElementById("searchName").innerText = `Name: ${pokemonObj.name}`;
        document.getElementById("searchYear").innerText = `Hair Color: ${pokemonObj.hair_color}`;
    });
});




function getPokemon(number, onSuccess){ //take in a number & callback function
    // This object is provided by the browser to let us do AJAX
    let xhr = new XMLHttpRequest();
    
    // we next define what to do as the request-response lifecycle proceeds
    //everythime the callback changes, it calls the next if statement
    xhr.addEventListener("readystatechange", () =>{
        console.log(`ready state: ${xhr.readyState}`);

        // when ready state reaches 4, we have the response:
        // we need to use 4,
        if (xhr.readyState === 4){
            let responseJson = xhr.response;
            // console.log(responseJson);

            // Working with JSON strings:
            // JSON.parse to "deserialize" (read) JSON
            // JSON.stringify to "serialize" (write) JSON

            // We know that we've received a response, but we don't know if our request was successful

            // HTTP response status codes 200-299 mean success
            if (xhr.status >= 200 && xhr.status < 300){
                console.log("HTTP Status Code says success!");

                let responseObj = JSON.parse(responseJson);
                console.log(responseObj);

                // callback function
                onSuccess(responseObj);
            }else{
                // Error occured
                // either bad request or server had trouble parsing it
                console.log("failure");
                console.log(responseJson);
            }
            
        }
        
    });
    // set up the request we want to send
    xhr.open("get", `https://swapi.co/api/people/${number}`);

    // actually send the request
    xhr.send();

}


