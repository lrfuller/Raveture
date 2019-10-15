'use strict';

// Solve the problem assigned to you, focusing on:
//      1: solving the problem (this is most important)
//      2: explaining what your code does in comments
//          -describe what each line does as best you can
//      3: writing well-structured, readable code
//          -avoid unnecessary code, especially unnecessary control structures
//          -use proper formatting and descriptive variable names
//
// After you're done, if you have time, move on to the two bonus problems
// at the bottom of the page.
// You don't need to provide comments for the bonus problems.

/*
    1. String Anagrams

    Given two strings, return true if they are anagrams.

    f("dad", "add") = true;
    f("lurch", "church") = false;
    f("abbab", "babab") = true;
    f("deded", "edede") = false;

*/

let anagrams = function(str1, str2) {
    //code goes here
};

/*
    2. Scrabble Score

    Given a string, compute the Scrabble score.

    --Letter Values-- 
    A, E, I, O, U, L, N, R, S, T = 1 
    D, G = 2
    B, C, M, P = 3
    F, H, V, W, Y = 4
    K = 5
    J, X = 8
    Q, Z = 10

    Example: "cabbage" should be scored as worth 14 points, because:
    3 points for C, 1 point for A, twice 3 points for B, twice 2 points for G,
    1 point for E And to total:
    3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 5 + 9 = 14
    
    f("cabbage") = 14
	
*/

let scrabbleScore = function(string) {
    //code goes here
};








/*
    3. Shared Prime Factors

    Given two integers, return an array containing all shared prime factors

    The prime factors of a number are a list of primes that, when multiplied
    together, produce the number:
        prime factorization of 12 : 2,2,3
        prime factorization of 20 : 2,2,5
        prime factorization of 25 : 5,5
        prime factorization of 13 : 13

    A prime is a number that's only factors are itself and 1.
    The first 10 primes are:
        2,3,5,7,11,13,17,19,23,29, ...

    Your function should compare the prime factors of both input numbers,
    and return an array of all the prime factors they have in common.

    f(20,12) = [2,2]
    f(20,25) = [5]
    f(12,25) = []

*/

let sharedPrimeFactors = function(int1, int2) {
    //list of primes to divide by
    //(should make it generate larger in order to fit other numbers)
    let primes = [];
    let primes1 = [];
    let primes2 = [];
    let commonPrimes = [];

    let wholeNums1 = []
    
    for(let i = 0; i < int1; i++){
        // console.log(i);
        if (i % 2 == 0){
            // primes = primes[i] + 2;
            console.log(primes[i]);
        }
        if (i % 1 == 0){
            // console.log("odd" + i);
        }
        
        
        
        
        
        
        //if a number can be divided by a prime, and have a remainder of 0 then it will keep that number
        // wholeNums1 = int1/primes[i];
        // if (wholeNums1 % 2 === 0 || wholeNums1 % 1 === 0){
        //     // nums = int1 / prime[i];
        //     // console.log(wholeNums1)
        //     primes1[i] = primes[i];
        //     console.log(primes1)
        // }
        //then multiply that number by each factor to get which ones will remain
        // if (wholeNums1 * wholeNums1 === ){
        // }   
        
        // if ( primes[i] / int1){
        //     primes1 += primes[i];
        //     console.log(primes1);
        // }
        // if (int2 / primes[i]){
        //     primes2 += primes[i];
        // }
    }
};

console.log(sharedPrimeFactors(20,12));

// assuming there was an isPrime() function, and it would return what numbers multiplied together = a number
// like in the example, it would return:
// prime factorization of 12 : 2,2,3
let sharedPrimeFactorsV2 = function(int1, int2) {
    let primes1 = [int1.isPrime(int1)];
    let primes2 = [int1.isPrime(int2)];
    let totalPrimes = [];
    for (let i = 0; i < primes1.length && i < primes2.length; i++){
        if (primes1[i] === primes2[i]){
            totalPrimes += primes1[i];
        }
    }
    return totalPrimes;
    //however if it only determined which value is prime, then I would be in a similar situation haha.
    //I mainly need to figure out in my head how to determine a set of primes that would be divisible by a number.
    
}
// console.log(sharedPrimeFactorsV2(20, 12));



function printPrime(value) {
    
    var primes = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            console.log(i + " " + primes[i]);
        }
    }
}

function divPrime(num1, num2){
    let totalArr = [];
    for(let i = 0; i < arr; i++){
        
    }
}

//console.log(printPrime(20));

// function checkPrime(value) {
//     for(var i = 2; i < value; i++) {
//         if(value % i === 0) {
//             return false;
//         }
//     }
//     return value > 1;
// }

// // console.log(checkPrime(20));


//https://js-algorithms.tutorialhorizon.com/2015/09/27/find-all-the-prime-factors-for-the-given-number/
function findPrimeFactors (num) {

    var primeFactors = [];
    //works simpler because evens are much easier to break down then the odds
    while (num % 2 === 0) {
        // console.log(primeFactors);
        primeFactors.push(2);
        num = num / 2;
        console.log(primeFactors);
    }
    
    //pushes the odd variables
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        // console.log(sqrtNum);
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
            // console.log(primeFactors);
        }
    }

    // return primeFactors;
    //is GREATER then 2, because the first while loops adds a 2. If you had >=, then you'd have an extra 2
    if (num > 2) {
        primeFactors.push(num);
    }
    return primeFactors;
}

// console.log(findPrimeFactors(10)); // [2, 5]
// console.log(findPrimeFactors(20)); // []
// console.log(findPrimeFactors(100));
// console.log(findPrimeFactors(13195));



// //integer is the value for which we are finding prime factors
// var integer = 100,
//     primeArray = [],
//     isPrime;

// //find divisors starting with 2

// for(i = 2; i <= integer; i++){
//   if (integer % i==0) {
    
//     //check if divisor is prime
//     for(var j = 2; j <= i/2; j++) {
//       if(i % j == 0) {
//         isPrime = false;
//       } else {
//         isPrime = true;
//       }
//     }

//     //if the divisor is prime
//     if (isPrime == true) {
//       //divide integer by prime factor & factor store in array primeArray
//       integer /= i
//       primeArray.push(i);
//     }
//   }   
// }

// for (var k = 0; k < primeArray.length; k++) {
//   console.log(primeArray[k]);
// }

// let findPrimeFactors = (num) => {
//     let arr = [];


//     for ( var i = 2; i < num; i++) {
//         let isPrime
//         if (num % i === 0) {
//             isPrime = true;
//             for (var j = 2; j <= i; j++) {
//                 if ( i % j === 0) {
//                 isPrime == false;
//                 }
//             } 
//         }if (isPrime == true) { arr.push(i)}

//     }console.log(arr)
// }

// console.log(findPrimeFactors(100));














/*
    4. Sentence Pangrams
    
    Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan
	gramma, "every letter") is a sentence using every letter of the alphabet at
	least once. The best known English pangram is:
    
    "The quick brown fox jumps over the lazy dog."
	
	The alphabet used consists of ASCII letters a to z, inclusive, and is case
    insensitive. Input will not contain non-ASCII symbols.
    
    f("The quick brown fox jumps over the lazy dog.") = true
    f("The quick brown fox jumps over the lazy cat.") = false
    f("Crazy Fredrick bought many very exquisite opal jewels.") = true
	
*/

let isPangram = function(string) {
    //code goes here
};

/*
    5. n-th Prime

    Given an integer n, determine what the nth prime is.

    Example :
    By listing the first six prime numbers : 2, 3, 5, 7, 11, and 13, we
    can see that the 6th prime is 13.

    f(1) = 2
    f(2) = 3
    f(6) = 13
    f(200) = 1217

*/

let nthPrime = function(n) {
    //code goes here
};

/*
    BONUS : Longest Palindrome Substring

    Given a string, find the longest palindromic substring.  If there
    is a tie, return the first longest substring.

    f("aaa") = "aaa"
    f("adam") = "ada"
    f("Watch the radar screen?") = " radar "
    f("aba,dbd") = "aba"

*/

let longestPalindromeSubstring = function(string) {
    //code goes here
};

// Just a line so I can see that it's running:
console.log("problems.js has run");

console.log("Lukas");