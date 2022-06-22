// Lab 1 loop 0 to 10 
console.log('Numbers from 0 to 10');
for (let i=0; i<11; i++) {
    console.log(i);
}

// Lab 2 loop 10 to 0
console.log('Numbers from 10 to 0');
for (let i=10; i>=0; i--) {
    console.log(i);
}

// Lab 3 peint +5 from 8 to 41
console.log('Numbers from 8 to 41 with +5 increment');
for (let i=8; i<=41; i= i+5){
    console.log(i);
}

// Lab 4 FizzBuzz
console.log('Numbers from 1 to 100 with FizzBuzz');
for (let i=1; i<=100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log('Fizz');
    } else if (i%3 == 0) {
        console.log('Buzz');
    } else if (i%5 == 0) {
        console.log('FizzBuzz');
    }
}

// Lab 5 report even and odd numbers
console.log('Reports even and odd numbers');
for (let i=0; i<=20; i++) {
    if(i%2==0){
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

// Lab 6 Fibonacci sequence
console.log('Fibonacci sequence');
let num1=0;
let num2=1;
console.log(num1);
console.log(num2);
for (let i = 2; i <= 20; i++) {
    let sum = num1 + num2;
    console.log(sum);
    num1 = num2;
    num2 = sum;
}

// Lab 7 print sqr of numbers from 1 to 10
console.log('sqr of numbers from 1 to 10');
for (let i = 1; i <= 10; i++) {
    console.log(i*i);
}

