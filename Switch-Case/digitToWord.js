// digitToWord.js

// Function to convert a single-digit number to word using switch case
function numberToWord(number) {
    switch (number) {
        case 0: console.log("Zero"); break;
        case 1: console.log("One"); break;
        case 2: console.log("Two"); break;
        case 3: console.log("Three"); break;
        case 4: console.log("Four"); break;
        case 5: console.log("Five"); break;
        case 6: console.log("Six"); break;
        case 7: console.log("Seven"); break;
        case 8: console.log("Eight"); break;
        case 9: console.log("Nine"); break;
        default: console.log("Invalid Input! Please enter a single digit (0-9).");
    }
}

// Read the number from command line argument
const input = parseInt(process.argv[2]);

// Validate the input and call the function
if (!isNaN(input) && input >= 0 && input <= 9) {
    numberToWord(input);
} else {
    console.log("Error: Please enter a valid single-digit number (0-9).");
}
