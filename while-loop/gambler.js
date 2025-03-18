// gambler.js

function gamble() {
    let money = 100;  // Initial amount of money
    const goal = 200; // Goal amount of money
    let betAmount = 1; // Amount to bet each time
    let betsMade = 0; // Number of bets made
    let wins = 0; // Number of times the gambler wins

    // Continue until the gambler goes broke or reaches the goal
    while (money > 0 && money < goal) {
        // Simulate a bet - 50% chance of winning or losing
        let betResult = Math.random() < 0.5 ? "lose" : "win";
        
        if (betResult === "win") {
            money += betAmount;  // Win: add Rs 1
            wins++;  // Increment the win count
        } else {
            money -= betAmount;  // Lose: subtract Rs 1
        }
        
        betsMade++;  // Increment the bet count
    }

    // Output the results
    if (money === 0) {
        console.log(`Gambler went broke after ${betsMade} bets and ${wins} wins.`);
    } else {
        console.log(`Gambler reached the goal of Rs 200 after ${betsMade} bets and ${wins} wins.`);
    }
}

// Run the gamble function
gamble();
