// factorial.js

// Read command-line argument
const num = parseInt(process.argv[2]);

// Check if input is valid
if (isNaN(num) || num < 0) {
    console.log("Please enter a non-negative integer.");
    process.exit(1);
}

// Function to compute factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Compute and display factorial
console.log(`${num}! = ${factorial(num)}`);
