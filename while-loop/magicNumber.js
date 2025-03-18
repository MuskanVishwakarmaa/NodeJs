// magicNumber.js

// Import readline module for user input
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize the range of possible numbers
let low = 1;
let high = 100;
let guess = Math.floor((low + high) / 2);

// Start the game
console.log("Think of a number between 1 and 100.");

// Loop until the correct number is guessed
while (low < high) {
    rl.question(`Is your number greater than ${guess}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === 'yes') {
            low = guess + 1; // Adjust the low end of the range
        } else if (answer.toLowerCase() === 'no') {
            high = guess - 1; // Adjust the high end of the range
        } else {
            console.log("Please answer with 'yes' or 'no'.");
            rl.close();
            return;
        }

        // Calculate the new guess
        guess = Math.floor((low + high) / 2);

        // If the number is guessed
        if (low === high) {
            console.log(`The magic number is ${low}!`);
            rl.close(); // Close the readline interface
        }
    });
}
