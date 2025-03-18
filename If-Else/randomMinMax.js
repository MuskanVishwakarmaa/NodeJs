// randomMinMax.js

// Function to generate a random 3-digit number
function getRandomThreeDigit() {
    return Math.floor(Math.random() * 900) + 100;  // Random number between 100 and 999
}

// Array to store 5 random 3-digit numbers
let randomNumbers = [];

// Generate 5 random numbers
for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomThreeDigit());
}

// Output the generated random numbers
console.log("Random 3-Digit Numbers: ", randomNumbers);

// Initialize variables for minimum and maximum values
let min = randomNumbers[0];
let max = randomNumbers[0];

// Find the minimum and maximum using if and else
for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < min) {
        min = randomNumbers[i];  // Update min if a smaller number is found
    } else if (randomNumbers[i] > max) {
        max = randomNumbers[i];  // Update max if a larger number is found
    }
}

// Output the minimum and maximum values
console.log("Minimum Value: ", min);
console.log("Maximum Value: ", max);
