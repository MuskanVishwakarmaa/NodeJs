// Predefined array of integers
const nums = [-1, 0, 1, 2, -1, -4];

// Function to find all unique triplets that sum to zero
function findTriplets(nums) {
    let result = [];

    // Sort the array to help avoid duplicates
    nums.sort((a, b) => a - b);

    // Loop through each element, treating it as the first element of the triplet
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip the duplicate elements to avoid repeating triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;  // Second element of the triplet
        let right = nums.length - 1;  // Third element of the triplet

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // If sum is zero, add the triplet to the result
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate elements for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++;  // We need a larger sum, so move the left pointer to the right
            } else {
                right--;  // We need a smaller sum, so move the right pointer to the left
            }
        }
    }

    return result;
}

// Find the triplets
const triplets = findTriplets(nums);

// Display the result
if (triplets.length > 0) {
    console.log("Triplets that sum to zero:");
    triplets.forEach(triplet => console.log(triplet));
} else {
    console.log("No triplets found that sum to zero.");
}
