'use strict';

let info = document.getElementById("userinfo");

//we can use fetch to query an API, including our own.
//we'll grab the current use info from /apiguy/login


//fetch sends a GET and returns a promise. We act on the result of the promise by callin .then:
 fetch("/apiguy/login")
    .then((response)=>{return response.json()})
    .then((obj)=>{
        //here we have our object thanks to the prior response.json()
        //let's modify the DOM
        //loop through properties of our object:
        for(let x in obj){
            //we'll produce a list item for each property
            let li = document.createElement("li");
            li.innerText = '${x} : ${obj[x]}';
            //to add elements to the DOM we must append them to existing elements:
            info.appendChild(li);
        }
    })
    .catch((err) =>{
        console.log(err);
    })
