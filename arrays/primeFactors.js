// Read the input number from command-line argument
const num = parseInt(process.argv[2]);

// Check if the number is valid
if (isNaN(num) || num <= 1) {
    console.log("Please enter a valid integer greater than 1.");
    process.exit(1);
}

// Function to compute prime factors of a number
function primeFactors(n) {
    let factors = []; // Array to store the prime factors
    
    // Divide by 2 until n is not divisible by 2
    while (n % 2 === 0) {
        factors.push(2); // Store the factor 2
        n /= 2;
    }

    // Check for odd factors starting from 3
    let i = 3;
    while (i * i <= n) {  // Check up to sqrt(n)
        while (n % i === 0) {
            factors.push(i); // Store the current factor
            n /= i;
        }
        i += 2; // Skip even numbers (since we already handled 2)
    }

    // If n is a prime number greater than 2
    if (n > 2) {
        factors.push(n); // Store the remaining prime factor
    }

    return factors; // Return the array of prime factors
}

// Get the prime factors of the input number
const factors = primeFactors(num);

// Display the result
if (factors.length > 0) {
    console.log(`Prime factors of ${num}: ${factors.join(' ')}`); // Display prime factors as space-separated values
} else {
    console.log(`No prime factors found for ${num}.`);
}
