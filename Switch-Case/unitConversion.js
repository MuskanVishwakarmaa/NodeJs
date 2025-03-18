// unitConversion.js

const prompt = require("prompt-sync")(); // Import prompt for user input

// Display menu options
console.log("Choose conversion type:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

// Take user input for conversion choice
const choice = parseInt(prompt("Enter your choice (1-4): "));

// Take user input for value to convert
const value = parseFloat(prompt("Enter the value to convert: "));

let convertedValue;

switch (choice) {
    case 1:
        convertedValue = value * 12; // 1 foot = 12 inches
        console.log(`${value} feet = ${convertedValue} inches`);
        break;
    case 2:
        convertedValue = value * 0.3048; // 1 foot = 0.3048 meters
        console.log(`${value} feet = ${convertedValue.toFixed(4)} meters`);
        break;
    case 3:
        convertedValue = value / 12; // 1 inch = 1/12 feet
        console.log(`${value} inches = ${convertedValue.toFixed(4)} feet`);
        break;
    case 4:
        convertedValue = value * 3.28084; // 1 meter = 3.28084 feet
        console.log(`${value} meters = ${convertedValue.toFixed(4)} feet`);
        break;
    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
}
