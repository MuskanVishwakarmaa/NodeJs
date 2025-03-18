// harmonicNumber.js

// Read command-line argument n
const n = parseInt(process.argv[2]);

// Check if n is a valid number
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
    process.exit(1);
}

// Compute the nth harmonic number
let harmonicNumber = 0;
for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
}

// Print the result
console.log(`The ${n}th Harmonic Number (H_${n}) is: ${harmonicNumber.toFixed(4)}`);
