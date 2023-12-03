/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    //* sort it
    nums.sort((a, b) => a - b);

    //* remove duplicates
    let numsSet = new Set(nums);
    numsSet = Array.from(numsSet);

    //* getting the number of the dublicates
    let res = [];
    for (let i = 0; i < numsSet.length; i++) {
        res.push(nums.lastIndexOf(numsSet[i]) - nums.indexOf(numsSet[i]));
    }
    // console.log(res)

    //* return the biggest one
    return numsSet[res.indexOf(Math.max(...res))]
};
