// placeValue.js

// Function to display place value of the number
function displayPlaceValue(number) {
    if (number === 1) {
        console.log("Unit");
    } else if (number === 10) {
        console.log("Ten");
    } else if (number === 100) {
        console.log("Hundred");
    } else if (number === 1000) {
        console.log("Thousand");
    } else if (number === 10000) {
        console.log("Ten Thousand");
    } else if (number === 100000) {
        console.log("Hundred Thousand");
    } else if (number === 1000000) {
        console.log("Million");
    } else if (number === 10000000) {
        console.log("Ten Million");
    } else if (number === 100000000) {
        console.log("Hundred Million");
    } else {
        console.log("Invalid input! Please enter a valid power of 10.");
    }
}

// Read the number from the command line input
let number = parseInt(process.argv[2]);

// Call the function to display the place value
displayPlaceValue(number);
