/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function (nums) {
    let mid = Math.floor((nums.length - 1) / 2);
    //moving to the left
    console.log(mid);
    while (mid >= 0) {
        // get the left area 
        console.log(mid)
        let left = 0
        for (let i = mid - 1; i >= 0; i--) {
            left += nums[i]
            console.log("left", nums[i])
        }

        //get the right area
        let right = 0
        for (let i = mid + 1; i < nums.length; i++) {
            right += nums[i]
            console.log("right", nums[i])

        }
        console.log(left, right);
        if (left === right) {
            return mid;
        } else {
            mid--
        }

    }

    // moving to the right
    mid = Math.floor((nums.length - 1) / 2);
    while (mid < nums.length) {
        // get the left area 
        console.log(mid)
        let left = 0
        for (let i = mid - 1; i >= 0; i--) {
            left += nums[i]
            console.log("left", nums[i])
        }

        //get the right area
        let right = 0
        for (let i = mid + 1; i < nums.length; i++) {
            right += nums[i]
            console.log("right", nums[i])

        }
        console.log(left, right);
        if (left === right) {
            return mid;
        } else {
            mid++
        }

    }
    console.log("done right")


    return -1

};

console.log(pivotIndex([-1, -1, 1, -1, -1, 0]))