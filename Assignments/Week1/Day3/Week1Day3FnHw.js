// Assignment
// ----------------------------------------------------------------
// 1
// summation function take a number as an argument and
// returns the sum from 1 to the number

const prompt = require('prompt-sync')();
let num = prompt("Enter a number ");

function summation(num) {
    sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i;
    } 
    return sum;
}

console.log(`The sum from 1 to ${num} `, summation(num))

// ----------------------------------------------------------------
// 2
// summationEven get the sum of all the even numbers from 1 to the number

let number = prompt("Enter a number ")

function summationEven(num) {
    sum = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
        
    } 
    return sum;
}

console.log(`The sum of all the even numbers from 1 to ${number} `, summationEven(number))

// ----------------------------------------------------------------
// 3 
// Rolling Dice