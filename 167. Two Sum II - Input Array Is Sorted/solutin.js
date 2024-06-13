/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let [lastIndex, firstIndex] = [numbers.length - 1, 0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[firstIndex] + numbers[lastIndex] == target) {
            return [firstIndex + 1, lastIndex + 1];
        }
        if (numbers[firstIndex] + numbers[lastIndex] > target) {
            lastIndex -= 1;
        } else {
            firstIndex += 1;
        }
    }
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));

