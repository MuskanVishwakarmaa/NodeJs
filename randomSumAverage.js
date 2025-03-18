// randomSumAverage.js

// Function to generate a random 2-digit number
function getRandomTwoDigit() {
    return Math.floor(Math.random() * 90) + 10; // Random number between 10 and 99
}

// Array to store 5 random 2-digit numbers
let randomNumbers = [];

// Generate 5 random numbers
for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomTwoDigit());
}

// Calculate the sum of the numbers
let sum = randomNumbers.reduce((acc, curr) => acc + curr, 0);

// Calculate the average
let average = sum / randomNumbers.length;

// Output the results
console.log("Random 2-Digit Numbers:", randomNumbers);
console.log("Sum:", sum);
console.log("Average:", average);
