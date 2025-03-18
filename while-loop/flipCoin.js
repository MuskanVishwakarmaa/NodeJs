// flipCoin.js

// Function to simulate coin flip
function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

// Initialize counters for Heads and Tails
let headsCount = 0;
let tailsCount = 0;

// Run the game until either Heads or Tails wins 11 times
while (headsCount < 11 && tailsCount < 11) {
    let result = flipCoin();
    
    // Increment the respective counter
    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    // Display current count for Heads and Tails
    console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
}

// Display the winner
if (headsCount === 11) {
    console.log("Heads wins 11 times!");
} else if (tailsCount === 11) {
    console.log("Tails wins 11 times!");
}
