function getRandomThreeDigitNumber() {
    return Math.floor(100 + Math.random() * 900);
}

function findSecondLargestAndSmallest(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    let firstSmallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Find largest and second largest
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }

        // Find smallest and second smallest
        if (num < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = num;
        } else if (num < secondSmallest && num !== firstSmallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

function findUsingSorting(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    return {
        secondSmallest: sortedArr[1],
        secondLargest: sortedArr[sortedArr.length - 2]
    };
}

// Generate array of 10 random 3-digit numbers
let numbers = Array.from({ length: 10 }, getRandomThreeDigitNumber);
console.log("Generated Numbers:", numbers);

// Find second largest and second smallest WITHOUT sorting
let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);
console.log("\nWithout Sorting:");
console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);

// Find second largest and second smallest WITH sorting
let sortedResults = findUsingSorting(numbers);
console.log("\nWith Sorting:");
console.log("Sorted Array:", numbers.slice().sort((a, b) => a - b));
console.log("Second Largest:", sortedResults.secondLargest);
console.log("Second Smallest:", sortedResults.secondSmallest);
