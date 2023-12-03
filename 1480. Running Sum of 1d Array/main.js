let runningSum = function (nums) {
    let result = [];
    let prev = 0;
    for (let i = 0; i < nums.length; i++) {
        prev += nums[i];
        result.push(prev)
    }
    
    return result
};


console.log(runningSum([3, 1, 2, 10, 1]))