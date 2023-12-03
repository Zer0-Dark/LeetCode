/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let k = 0;
    for (let i = nums1.length; i >= 0; i--) {
        if (nums1[i] === 0) {
            nums1[i] = nums2[k]
            k++;
            // console.log(k,n)
        }
        if (k === n) {
            break;
        }
    }
    nums1.sort((a, b) => a - b);
    // console.log(nums1);
};