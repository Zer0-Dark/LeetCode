/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (!nums || nums.length === 0) return undefined;

    let left = 0;
    let right = nums.length - 1;

    // Use binary search to find the index of the minimum element
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // If mid element is greater than right element, minimum is to the right of mid
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Otherwise minimum is at mid or to the left of mid
            right = mid;
        }

        console.log(left, mid, right)
    }

    return nums[left];
};

// Examples

console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // rotated -> 0
