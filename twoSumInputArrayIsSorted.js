/**
 * Given an array of integers that is already sorted in ascending order,
 * find two numbers such that they add up to a specific target number.
 *
 * @param {number[]} nums - The sorted array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers.
 */
function twoSum(nums, target) {
    // Initialize two pointers, one at the beginning and one at the end of the array.
    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    // Continue until the two pointers meet or cross each other.
    while (leftPointer < rightPointer) {
        // Calculate the sum of the elements at the two pointers.
        const currentSum = nums[leftPointer] + nums[rightPointer];

        // Check if the current sum equals the target.
        if (currentSum === target) {
            // Return the indices of the two numbers.
            return [leftPointer, rightPointer];
        } else if (currentSum < target) {
            // If the current sum is less than the target, move the left pointer to the right.
            leftPointer++;
        } else {
            // If the current sum is greater than the target, move the right pointer to the left.
            rightPointer--;
        }
    }

    // If no solution is found, return an empty array.
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (indices of numbers 2 and 7 that add up to 9)
