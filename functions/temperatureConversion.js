// temperatureConversion.js

// Import the readline module to handle user input
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5/9;
}

// Main function to handle user input and conversion logic
function convertTemperature() {
    rl.question("Enter 1 to convert Celsius to Fahrenheit or 2 to convert Fahrenheit to Celsius: ", function(choice) {
        // Convert the input to an integer
        choice = parseInt(choice);

        // Handle different choices using if-else
        if (choice === 1) {
            // Celsius to Fahrenheit
            rl.question("Enter temperature in Celsius (0°C to 100°C): ", function(degC) {
                degC = parseFloat(degC);
                if (degC >= 0 && degC <= 100) {
                    let degF = celsiusToFahrenheit(degC);  // Call the conversion function
                    console.log(`${degC}°C is equal to ${degF}°F`);
                    rl.close();
                } else {
                    console.log("Invalid input. Please enter a value between 0°C and 100°C.");
                    rl.close();
                }
            });
        } else if (choice === 2) {
            // Fahrenheit to Celsius
            rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", function(degF) {
                degF = parseFloat(degF);
                if (degF >= 32 && degF <= 212) {
                    let degC = fahrenheitToCelsius(degF);  // Call the conversion function
                    console.log(`${degF}°F is equal to ${degC}°C`);
                    rl.close();
                } else {
                    console.log("Invalid input. Please enter a value between 32°F and 212°F.");
                    rl.close();
                }
            });
        } else {
            console.log("Invalid choice. Please enter 1 or 2.");
            rl.close();
        }
    });
}

// Call the function to start the conversion process
convertTemperature();

