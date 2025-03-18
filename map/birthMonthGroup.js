// Function to generate birth months and group individuals by their birth month
function generateBirthMonths() {
    // Create a map to store individuals grouped by birth month
    const birthMonthGroups = new Map();

    // Generate birth month for 50 individuals
    for (let i = 1; i <= 50; i++) {
        // Randomly generate a birth month (1 to 12)
        const birthMonth = Math.floor(Math.random() * 12) + 1;

        // If the birth month is not already in the map, add it
        if (!birthMonthGroups.has(birthMonth)) {
            birthMonthGroups.set(birthMonth, []);
        }

        // Add the individual (with a unique id) to the corresponding birth month group
        birthMonthGroups.get(birthMonth).push(`Individual ${i}`);
    }

    return birthMonthGroups;
}

// Function to print individuals grouped by their birth month
function printBirthMonthGroups(birthMonthGroups) {
    console.log("Individuals grouped by birth month:");
    birthMonthGroups.forEach((individuals, month) => {
        console.log(`Month ${month}:`);
        individuals.forEach(individual => {
            console.log(`  - ${individual}`);
        });
    });
}

// Generate birth month groups
const birthMonthGroups = generateBirthMonths();

// Print the results
printBirthMonthGroups(birthMonthGroups);
