const arr = [2,3,4];
arr.unshift(0,1);
arr.push(5,6,7);
console.log(arr);

const arr1 = [5, 7, 9];
arr1.push(6); // returns ???
console.log(arr1);

const numbers = [4, 9, 7, 2, 1, 8];

  // your code here
for (let i = 0; i < numbers.length; i++){
    if(numbers[i]%2 != 0){
        numbers[i] = numbers[i] * 2;
    }
}
console.log(numbers);
numbers; // => [4, 18, 14, 2, 2, 8]

const colours = ['green', 'yellow', 'black', 'white', 'blue'];
for(let i = 0; i < colours.length; i++){
    console.log(`My #${i+1} choice is ${colours[i]}`);
}

