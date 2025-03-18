// primeFactors.js

// Read the input number from command-line argument
const num = parseInt(process.argv[2]);

// Check if the number is valid
if (isNaN(num) || num <= 1) {
    console.log("Please enter a valid integer greater than 1.");
    process.exit(1);
}

// Function to compute prime factors of a number
function primeFactors(n) {
    let factors = [];
    
    // Divide by 2 until n is not divisible by 2
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    
    // Now, check for odd numbers starting from 3
    let i = 3;
    while (i * i <= n) {  // Check up to sqrt(n)
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
        i += 2; // Skip even numbers (already checked 2)
    }

    // If n is a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }
    
    return factors;
}

// Get and display the prime factors
const factors = primeFactors(num);
console.log(`Prime factors of ${num}: ${factors.join(' ')}`);
