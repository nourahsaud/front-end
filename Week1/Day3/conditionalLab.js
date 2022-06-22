// Lab 1 check the language

// prompt a language 
const prompt = require('prompt-sync')();
let language = prompt('Choose a language: Arabic, English or French ');

//let language = 'French';

if (language == 'Arabic') {
    console.log("مرحبا");
} else if (language == 'English') {
    console.log("Hello");
} else if (language == 'French') {
    console.log("Bonsoir");
} else {
    console.log("Wrong language: " + language);
}

// Lab 2 Driving age
let driver = prompt('How Old Are You?');

if (driver < 18) {
    remaining = 18 - driver;
    console.log(`Sorry, you can not drive yet! you have to wait ${remaining} years left`);
} else {
    console.log("You can drive")
}


// Lab 3 Switch Day
day = prompt('Choose between 1 to 7');

switch (day) {
    case 1: 
        console.log('Sun');
        break;
    case 2: 
        console.log('Mon');
        break;
    case 3: 
        console.log('Tue');
        break;
    case 4: 
        console.log('Wed');
        break;
    case 5:
        console.log('Thu');
        break;
    case 6: 
        console.log('Fri');
        break;
    case 7: 
        console.log('Sat');
        break;
}