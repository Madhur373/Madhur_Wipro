// // 4. Print prime numbers 1 to 100
console.log("Prime numbers between 1 and 100:");

// Loop through numbers from 2 to 100 (1 is not a prime number)
for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    // Check if 'i' is divisible by any number from 2 up to its square root
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false; // It has a divisor, so it's not prime
            break;           // Exit the inner loop early
        }
    }

    // If it is still true, then 'i' is a prime number
    if (isPrime) {
        console.log(i);
    }
}

// 5. Guessing game (Mockup)

// Add () at the end to properly initialize the prompt-sync module
const prompt = require('prompt-sync')();   

// Generates a random integer between 1 and 100
let target = Math.floor(Math.random() * 100) + 1; 
let guess;

console.log("I have picked a random number between 1 and 100. Try to guess it!");

while(guess !== target) {
    guess = parseInt(prompt("Guess the number: "));
    
    // Optional: Check if the user entered a valid number
    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
        continue; 
    }

    if(guess < target) {
        console.log("Too low");
    } else if(guess > target) {
        console.log("Too high");
    }
} 

console.log("You won!");





// 7 - 5. Create a calculator using functions for add, subtract, multiply, and divide.
const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
console.log(calc.sum(5, 5, 10, 20));

//Write a program demonstrating closure behavior.
let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);

//3. Create a callback-based calculator.
const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
 
function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3))



// const prompt = require("prompt-sync")();

// function fetchRandomNumberFromUser() {
//     return parseInt(prompt("Enter a number between 1 and 10: "));
// }

// const guessNumber = Math.floor(Math.random() * 10) + 1;
// console.log("Guess the number between 1 and 10:");
// const num = fetchRandomNumberFromUser();

// if(guessNumber === num) {
//     console.log("Congratulations! You guessed the number.");
// } else {
//     console.log(`Sorry! The correct number was ${guessNumber}.`);
// }

// const prompt = require("prompt-sync")()
// let num = Number(prompt("Enter the num: "));
// let isPrime = true;
 
 
// if(num <= 1){
//     isPrime = false;
// }else{
//     for(let i =2;i<=Math.sqrt(num);i++){
//         if(num % i === 0){
//         isPrime = false;
//         break;
//     }
// }
// }
 
 
// if(isPrime){
//     console.log("Prime")
// }else{
//     console.log("Not Prime")
// }

// for (let num = 2; num <= 100; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) { // [2 - sqrt(num)]
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }

// function greatestNumber(a, b, c) {
//     // if (a >= b && a >= c) {
//     //     return a;
//     // } else if (b >= a && b >= c) {
//     //     return b;
//     // } else {
//     //     return c;
//     // }

//     return Math.max(a, b, c); // Using built-in function to find the greatest number
// }
 
// console.log("Greatest Number:", greatestNumber(10, 25, 15));

// function calculator(a, b , operator){
//     switch(operator){
//         case "+":
//             console.log(a+b);
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         case "*":
//             console.log(a*b);
//             break;
//         case "/":
//             console.log(a/b);
//             break;
//     }
// }
 
// calculator(10,8,"-");
 

// function add(a, b) {
//     return a + b;
// }
 
// function subtract(a, b) {
//     return a - b;
// }
 
// function multiply(a, b) {
//     return a * b;
// }
 
// function divide(a, b) {
//     return a / b;
// }
 
// console.log("Addition:", add(10, 5));
// console.log("Subtraction:", subtract(10, 5));
// console.log("Multiplication:", multiply(10, 5));
// console.log("Division:", divide(10, 5));

// const calc = {
//     sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
//     sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
//     mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
//     div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
// };


// function calculator(operation, ...operands) {
//     return operation(...operands);
// }

// console.log(calculator(calc.sum, 1, 2, 3))

// console.log(calc.sum(5, 5, 10, 20));


// let sum = 0; // 2
// function f() {
//     function increment() {
//         sum++;
        
//         function inner2() {
//             sum++;
//             console.log(sum);
//         }
//         return inner2();
//     }
//     return increment();
// }
// f();
// console.log(sum);


// function func(a, b, f2) {
//     console.log(f2(a, b));
// }

// func(1, 2, (a, b) => a + b)

// arr = [1, 2, 3, [4, [5, 6]], 7, [8, 9], 10] --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// inheritance

// Class -> Object --> prototype [toString(), hashCode(), etc.]
// protpotype -> first --> 11
// A -> work, prof --> a | prototype --> a.first() --> refrence
// B extends A -> play, work, prof --> b | a | prototype