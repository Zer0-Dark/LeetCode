/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const results = [];

    function backtrack(i, path) {
        const total = path.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if (total === target) {
            results.push([...path]);
            return;
        }

        // BASE CASE 
        if (i === candidates.length) {
            return;
        }
        // total
        // another base case if the total is bigger than the number
        if (total > target) {
            return;
        }


        // option 1: pick the current number and don't change
        path.push(candidates[i]);
        backtrack(i, path)

        // option 2: 'don't pick' the current number
        path.pop();
        backtrack(i + 1, path);

    }
    backtrack(0, []);
    return results;
};

combinationSum([2, 3, 6, 7], 7);