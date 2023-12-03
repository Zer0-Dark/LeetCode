/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k > nums.length) {

        k = k % nums.length;
    }
    // console.log(k)
    // console.log(k)
    let splitted = nums.splice((nums.length - k), k)
    // console.log(splitted,nums);
    nums.unshift(...splitted)
    // console.log(nums)
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))