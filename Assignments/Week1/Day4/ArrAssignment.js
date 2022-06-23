
// Q1 Log out each of my friends but with their name all lower-cased.
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

// logs out "I have a friend named <friend's name>" for each friend


// Q2 
const numbers = [1, 5, 8];

// numsTimesTwo --> [1, 25, 64]

/*--- using an arrow function for the callback ---*/
const timesTwo = numbers.map(num => num * 2);
console.log(timesTwo);

// Q3
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const inst = instructors.map(x => `${x} is awesome`);
console.log(inst);


// Q4  
const nums = [25, 6, 8, 3];
// count even nums

/*--- using an arrow function for the callback ---*/
let even = nums.reduce((a, b) => a+(b%2?0:1),0);
console.log(even);

// Q5 
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

// jerks equals ["jerks", "jerks"]
const jerks = people.filter(x => x === "jerks");
console.log(jerks);

// Q6
// 6.1
let avg = (arr) => {
	let sum = arr.reduce((prev,current)=>prev+current);
	return sum/arr.length;
};
let a = avg([1,2,33]);
console.log(a);

// 6.2

let rev = (str) => {
    let splitStr = str.split("");
    console.log(splitStr);
    let revArr = splitStr.reverse();
    console.log(revArr);
    let joinArr = revArr.join("");
    console.log(joinArr);
    return joinArr;
}

let word = rev("Hi");
console.log(word);


// Q7 Object 
const movie = {
    title: "Lion King",
    duration: 120,
    stars: ["Simba", "Oscar"]
}
