//  bruteforce solution

// let twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }

//         }

//     }
// };

// // Two pointers Solution for sorted array only 
// let twoSum = (nums, target) => {
//     // get the first two indexes 
//     let firstIndex = 0;
//     let lastIndex = nums.length - 1;


//     //  loop on the array
//     for (let i = 0; i < nums.length; i++) {

//         // if the target = the two elements return the index of the two
//         if (nums[firstIndex] + nums[lastIndex] == target) {
//             return [firstIndex, lastIndex]
//         }


//         // if it's bigger move the first pointer one step forward to the middile
//         if (nums[firstIndex] + nums[lastIndex] < target) {
//             firstIndex += 1;
//         }

//         // if it's smaller move the last pointer one step to the middle
//         if (nums[firstIndex] + nums[lastIndex] > target) {
//             lastIndex -= 1;
//         }

//     }

//     // if not found return not found
//     return [0, 0]

// }


//  hash map soltuion 
// making it like equation with what is subtracted from it to get
// the target
let twoSum = (nums, target) => {
    //declar the hashmap
    let pushedNums = new Map();

    for (let i = 0; i < nums.length; i++) {
        let subtractValue = target - nums[i];

        if (pushedNums.has(subtractValue)) {
            return [pushedNums.get(subtractValue), i];
        }

        pushedNums.set(nums[i], i);
    }

    // If no pair is found
    return "not found";
}

module.exports = twoSum;

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([3, 2, 3], 6));