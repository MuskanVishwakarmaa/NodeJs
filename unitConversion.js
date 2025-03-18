// unitConversion.js

// Function to convert inches to feet
function inchesToFeet(inches) {
    return inches / 12;
}

// Function to convert feet to meters (1 foot = 0.3048 meters)
function feetToMeters(feet) {
    return feet * 0.3048;
}

// Function to convert acres to square meters (1 acre = 4046.86 square meters)
function acresToSquareMeters(acres) {
    return acres * 4046.86;
}

// Part A: Convert 42 inches to feet
let inches = 42;
let feet = inchesToFeet(inches);
console.log(`${inches} inches is equal to ${feet.toFixed(2)} feet`);

// Part B: Convert dimensions of a rectangular plot (60ft x 40ft) to meters
let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = feetToMeters(lengthFeet);
let widthMeters = feetToMeters(widthFeet);
console.log(`The rectangular plot of ${lengthFeet} feet x ${widthFeet} feet is equal to ${lengthMeters.toFixed(2)} meters x ${widthMeters.toFixed(2)} meters`);

// Part C: Calculate area of 25 such plots in acres
let areaFeet = lengthFeet * widthFeet;  // Area of one plot in square feet
let areaMeters = lengthMeters * widthMeters;  // Area of one plot in square meters
let areaAcres = areaMeters / 4046.86;  // Area of one plot in acres
let totalAreaAcres = areaAcres * 25;  // Area of 25 plots in acres
console.log(`The area of 25 such plots is equal to ${totalAreaAcres.toFixed(2)} acres`);
