/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let allNumbers = 1;
    for (let i = 0; i < nums.length; i++) {
        allNumbers = nums[i] * allNumbers
        console.log(allNumbers);
    }

    let answerArr = [];
    for (let i = 0; i < nums.length; i++) {
        answerArr.push(allNumbers / nums[i]);
    }

    return answerArr;
};


console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
