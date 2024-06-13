// Write your first solution here
/**
 * Approach: Hash Table (Map)
 *
 * Algorithm:
 * - Iterate through the array `nums`.
 * - For each element `nums[i]`, check if it exists in the hash table.
 * - If it exists, return true (indicating a duplicate).
 * - If it doesn't exist, add `nums[i]` to the hash table.
 * - If the loop completes without finding a duplicate, return false.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashTable = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hashTable.get(nums[i])) {
            return true;
        }
        hashTable.set(nums[i], true);
    }
    return false;
};
