// dateCheck.js

// Take the month and day from command line arguments
let month = parseInt(process.argv[2]);  // Command-line argument for month
let day = parseInt(process.argv[3]);    // Command-line argument for day

// Function to check if the date is between March 20 and June 20
function isDateInRange(month, day) {
    // Checking for the range between March 20 (3/20) and June 20 (6/20)
    if ((month > 3 && month < 6) || (month === 3 && day >= 20) || (month === 6 && day <= 20)) {
        return true;
    }
    return false;
}

// Output the result
console.log(isDateInRange(month, day));
