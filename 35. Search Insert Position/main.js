/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, key) {
    let start = 0;
    let end = nums.length - 1;
    let middle = 0;
    while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (nums[middle] === key) {
            // found the key
            return middle;
        } else if (nums[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    if (nums[middle] > key) {
        return middle + 1
    } else {
        return middle
    }

};

console.log(searchInsert([1, 3, 5, 6], 2))