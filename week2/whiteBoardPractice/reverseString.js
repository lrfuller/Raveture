'use strict';




//Help from Aston with the if logic and pushing to the array
//I understand how it works, however I don't have much experience with arrays, so I'm going to try and practice more with them
function revV4(str){
    //arraywords: final variable that will display our entire string as an array
    let arraywords = [];
    //wordblock: temporary variable to hold our string
    let wordblock = "";

    //walk through the string
    for(let i=0;i<str.length;i++){
        //when it encounters a space within the string && as long as we haven't hit the end of the loop
        //push the string wordblock into the array arraywords
        //then empty the wordblock string
        if (str[i]==" "&&i<(str.length-1)){
            arraywords.push(wordblock);
            wordblock = "";
        }
        //if it's at the end of the loop, add the last character in the correct spot
        //this has to be in place, because words end with a character not a space (otherwise we could use the last if
        // block to do this)
        if(i==str.length-1){
            wordblock=str[i]+wordblock;
            arraywords.push(wordblock);
        }
        //fills the characters if there is no space
        if(str[i]!=" "){
            //runs first, this places the current character in front of the last character in the wordblock string
            wordblock=str[i]+wordblock;   
        }
    }
    return arraywords;
}
console.log(revV4("hello world peter"));
