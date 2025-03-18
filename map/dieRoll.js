// Function to simulate die rolls and store results in a Map
function rollDieAndStoreResults() {
    const dieRolls = new Map();
    let rollCount = 0;
    let maxRoll = 10;

    // Continue rolling until one of the numbers reaches 10 occurrences
    while (true) {
        // Roll the die (random number between 1 and 6)
        const roll = Math.floor(Math.random() * 6) + 1;

        // Increment the count of the rolled number in the Map
        dieRolls.set(roll, (dieRolls.get(roll) || 0) + 1);

        // If any number has reached 10 rolls, break the loop
        if (dieRolls.get(roll) === maxRoll) {
            break;
        }

        rollCount++;
    }

    return dieRolls;
}

// Function to find the most and least rolled numbers
function findMaxAndMinRolls(dieRolls) {
    let maxRollCount = -1;
    let minRollCount = Infinity;
    let maxRollNum = null;
    let minRollNum = null;

    // Iterate through the Map to find the maximum and minimum roll counts
    for (let [key, value] of dieRolls) {
        if (value > maxRollCount) {
            maxRollCount = value;
            maxRollNum = key;
        }
        if (value < minRollCount) {
            minRollCount = value;
            minRollNum = key;
        }
    }

    console.log(`Number rolled maximum times: ${maxRollNum} (${maxRollCount} times)`);
    console.log(`Number rolled minimum times: ${minRollNum} (${minRollCount} times)`);
}

// Run the simulation
const dieRolls = rollDieAndStoreResults();

// Display the results
console.log("Die roll results:", Array.from(dieRolls.entries()));
findMaxAndMinRolls(dieRolls);
