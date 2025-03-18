// coinFlip.js

// Function to simulate a coin flip
function flipCoin() {
    // Generate a random number between 0 and 1
    let result = Math.random();

    // Check if the result is less than 0.5 for Heads, else Tails
    if (result < 0.5) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}

// Call the function to simulate the coin flip
flipCoin();
