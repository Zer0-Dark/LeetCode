/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let test = new Set(nums)
    let nums1 = Array.from(test);
    // console.log(nums1);
    for (let i = 0; i < nums1.length; i++) {
        nums[i] = nums1[i]
    }
    return nums1.length
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))