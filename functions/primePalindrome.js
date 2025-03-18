const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;  // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  // If num is divisible by i, it's not prime
        }
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    let numStr = num.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return parseInt(reversedStr);
}

// Main function to check prime and palindrome prime
function checkPrimePalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        
        let palindrome = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindrome}.`);

        // Check if the palindrome is also prime
        if (isPrime(palindrome)) {
            console.log(`Palindrome number ${palindrome} is also a prime number.`);
        } else {
            console.log(`Palindrome number ${palindrome} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

// Take user input
rl.question("Enter a number to check: ", function(num) {
    num = parseInt(num);  // Convert input to an integer
    checkPrimePalindrome(num);
    rl.close();
});
