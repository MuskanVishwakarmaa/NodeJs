// powerOfTwo.js

// Read command-line argument n
const n = parseInt(process.argv[2]);

// Check if n is a valid number
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

// Print the table of powers of 2
console.log(`Table of Powers of 2 (up to 2^${n}):`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
