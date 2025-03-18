// arithmeticOperations.js

// Function to perform arithmetic operations and find the max and min
function performOperations(a, b, c) {
    // Perform the operations
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    // Display the results of each operation
    console.log("Result of a + b * c: " + result1);
    console.log("Result of a % b + c: " + result2);
    console.log("Result of c + a / b: " + result3);
    console.log("Result of a * b + c: " + result4);

    // Find maximum and minimum values using if-else
    let max, min;

    if (result1 >= result2 && result1 >= result3 && result1 >= result4) {
        max = result1;
    } else if (result2 >= result1 && result2 >= result3 && result2 >= result4) {
        max = result2;
    } else if (result3 >= result1 && result3 >= result2 && result3 >= result4) {
        max = result3;
    } else {
        max = result4;
    }

    if (result1 <= result2 && result1 <= result3 && result1 <= result4) {
        min = result1;
    } else if (result2 <= result1 && result2 <= result3 && result2 <= result4) {
        min = result2;
    } else if (result3 <= result1 && result3 <= result2 && result3 <= result4) {
        min = result3;
    } else {
        min = result4;
    }

    // Display the maximum and minimum values
    console.log("Maximum Value: " + max);
    console.log("Minimum Value: " + min);
}

// Read input values from the command line
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

// Call the function to perform the operations and find max and min
performOperations(a, b, c);
