/**
 * Finds the majority element in an array of numbers.
 * @param {number[]} nums - The array of numbers.
 * @returns {number} - The majority element.
 */
var majorityElement = function (nums) {
    //* sort it
    nums.sort((a, b) => a - b);

    //* remove duplicates
    let numsSet = new Set(nums);
    numsSet = Array.from(numsSet);

    //* getting the number of the duplicates
    let res = [];
    for (let i = 0; i < numsSet.length; i++) {
        res.push(nums.lastIndexOf(numsSet[i]) - nums.indexOf(numsSet[i]));
    }
    // console.log(res)

    //* return the biggest one
    return numsSet[res.indexOf(Math.max(...res))]
};