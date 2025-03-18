// Function to find numbers with repeated digits
function findRepeatedDigitsInRange() {
    let repeatedDigits = [];

    // Loop through numbers from 0 to 100
    for (let num = 0; num <= 100; num++) {
        let numStr = num.toString(); // Convert number to string

        // Check if the number has repeated digits (e.g., 11, 22, 33, ...)
        if (numStr[0] === numStr[1]) {
            repeatedDigits.push(num);
        }
    }

    return repeatedDigits;
}

// Get the numbers with repeated digits
const result = findRepeatedDigitsInRange();

// Display the result
console.log("Numbers with repeated digits from 0 to 100:", result);
