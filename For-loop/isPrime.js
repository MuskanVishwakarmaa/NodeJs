// isPrime.js

// Read command-line argument
const num = parseInt(process.argv[2]);

// Check if input is a valid number
if (isNaN(num) || num < 2) {
    console.log("Please enter a number greater than 1.");
    process.exit(1);
}

// Check if number is prime
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

// Print result
if (isPrime) {
    console.log(`${num} is a Prime Number.`);
} else {
    console.log(`${num} is NOT a Prime Number.`);
}
