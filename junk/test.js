class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        // Creates an array of size n filled with 1s
        // This array will store the final result where each element 
        // equals the product of all other elements (not including itself)
        const result = new Array(n).fill(1);

        // First pass: calculate prefix products (left side)
        // result[i] will contain the product of all elements to the left of index i
        // Example: [1,2,3,4] -> result becomes [1, 1, 2, 6] after this loop
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            console.log(result,'prefix')
            result[i] = prefix;  // Store the product of all elements before i
            prefix *= nums[i];   // Update prefix for next iteration
        }

        // Second pass: calculate suffix products (right side) and multiply
        // result[i] *= suffix means: multiply by product of all elements to the right of i
        // This gives us: (product of left) * (product of right) = product of all except self
        // Example: [1,2,3,4] -> result becomes [24, 12, 8, 6] after this loop
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            console.log(result,'poistfix')
            result[i] *= suffix;  // Multiply left product by right product
            suffix *= nums[i];    // Update suffix for next iteration
        }

        return result;
    }
}

// Test Cases
const solution = new Solution();

console.log("Test 1:");
console.log("Input: [1,2,3,4]");
console.log("Output:", solution.productExceptSelf([1, 2, 3, 4]));
console.log("Expected: [24,12,8,6]\n");

console.log("Test 2:");
console.log("Input: [-1,1,0,-3,3]");
console.log("Output:", solution.productExceptSelf([-1, 1, 0, -3, 3]));
console.log("Expected: [0,0,9,0,0]\n");

console.log("Test 3:");
console.log("Input: [2,3,4,5]");
console.log("Output:", solution.productExceptSelf([2, 3, 4, 5]));
console.log("Expected: [60,40,30,24]\n");

console.log("Test 4:");
console.log("Input: [1,1]");
console.log("Output:", solution.productExceptSelf([1, 1]));
console.log("Expected: [1,1]\n");

console.log("Test 5:");
console.log("Input: [0,0]");
console.log("Output:", solution.productExceptSelf([0, 0]));
console.log("Expected: [0,0]\n");
