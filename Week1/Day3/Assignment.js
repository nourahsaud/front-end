
// prompt a number
const prompt = require('prompt-sync')();
let num = prompt("Enter a number ");

if (num%3 == 0) {
    console.log("Fizz")
} else if (num%5 == 0) {
    num = "Buzz"
} else if (num%3 == 0 && num%5 == 0) {
    num = "FizzBuzz"
} else {
    num = num
}
