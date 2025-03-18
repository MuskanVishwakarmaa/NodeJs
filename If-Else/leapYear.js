// leapYear.js

// Function to check if the year is a leap year
function isLeapYear(year) {
    // Check if year is divisible by 4, but not by 100 unless divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

// Read the year from the command line
let year = parseInt(process.argv[2]);

// Check if the input year is a valid 4-digit number
if (year >= 1000 && year <= 9999) {
    // Output whether the year is a leap year or not
    if (isLeapYear(year)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is not a Leap Year.");
    }
} else {
    console.log("Please enter a valid 4-digit year.");
}
